import { push } from 'react-router-redux';

import OrdersAPI from '../apis/order';
import CheckoutAPI from '../apis/checkout';
import CheckoutStepCalculator from '../services/checkout-step-calculator';
import InvalidCheckoutStepException from '../errors/invalid-checkout-step';
import InvalidOrderTransitionException from '../errors/invalid-order-transition';
import Actions from './';

import APP_ROUTES from '../constants/app-routes';

const checkout = {
  goToNextStep: (order, formData = {}) => {
    return (dispatch, getState) => {
      // Show Loader
      // Send next request to API.
      // If success ->
      //    reset the order
      //    re-route to the next step.
      //    hide loader
      //    show success flash
      // If failed ->
      //    Do not touch the order.
      //    show error message in flash.
      //    hide loader

      // Edge Cases:
      // Return if order is already complete.

      let orderState = order.state;
      let checkoutSteps = order.checkout_steps;

      if (CheckoutStepCalculator.isLastStep(checkoutSteps, orderState)) {
        dispatch(Actions.showFlash('Your order has already been placed. Thanks!'));
        dispatch(push(APP_ROUTES.homePageRoute));
      }
      else {
        dispatch (Actions.displayLoader());
        let currentStep = getState().currentCheckoutStep;
        let apiToken = getState().user.token || order.guest_token;
        let apiPromise;

        if (CheckoutStepCalculator.isPristineStep(checkoutSteps, currentStep, orderState)) {
          apiPromise = CheckoutAPI.update(order.number, apiToken, formData);
        }
        else {
          apiPromise = OrdersAPI.update(order.number, apiToken, formData);
        }

        apiPromise.then((response) => {
          dispatch(Actions.updateOrderInState(response.body));
          let newOrder = getState().order;
          dispatch (push(checkout._fetchNextRoute(newOrder, currentStep)));
          dispatch (Actions.hideLoader());
          dispatch(Actions.showFlash(`Successfully saved ${currentStep} form.`));
        },
        (error) => {
          dispatch (Actions.hideLoader());
          dispatch(Actions.showFlash(error.response.body.error, 'danger'));
        });

        return apiPromise;
      }
    };
  },

  _fetchNextRoute: (order, currentStep) => {
    try {
      return checkout._nextCheckoutStepRoute(order, currentStep);
    } catch (err) {
      if (err instanceof InvalidCheckoutStepException) {
        return APP_ROUTES.cartPageRoute;
      }
      else {
        if (err instanceof InvalidOrderTransitionException) {
          return APP_ROUTES.homePageRoute;
        }
      }
    }
  },

  _nextCheckoutStepRoute: (order, currentStep) => {
    let currentStepIndex = order.checkout_steps.indexOf(currentStep.trim());

    /* If currentStep is a valid step and not the last step.
       Last step is 'complete' which means order is placed. */
    if (currentStepIndex > -1 || currentStep === 'cart') {
      if (!CheckoutStepCalculator.isLastStep(order.checkout_steps, currentStep)) {
        const nextStep = CheckoutStepCalculator.next(order.checkout_steps, currentStep);

        return APP_ROUTES.checkout[`${ nextStep }PageRoute`];
      }
      else {
        throw new InvalidOrderTransitionException();
      }
    }
    else {
      throw new InvalidCheckoutStepException();
    }
  }

};

export default checkout;
