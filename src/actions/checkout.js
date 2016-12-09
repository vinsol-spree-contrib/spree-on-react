import { push } from 'react-router-redux';

import CheckoutAPI from '../apis/checkout';
import InvalidCheckoutStepException from '../errors/invalid-checkout-step';
import InvalidOrderTransitionException from '../errors/invalid-order-transition';
import Actions from './';

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

      if (order.state === 'complete') {
        dispatch(Actions.showFlash('Your order has already been placed. Thanks!'));
        dispatch(push('/'));
      }
      else {
        dispatch (Actions.displayLoader());

        CheckoutAPI.next(order.number, order.token, formData).then((response) =>{
          dispatch(Actions.updateOrder(response.body));
          dispatch (push(checkout._fetchNextRoute(order)));
          dispatch (Actions.hideLoader());
          dispatch(Actions.showFlash('Success!!'));
        },
        (error) => {
          dispatch(Actions.showFlash(error.response.body.error, 'danger'));
          dispatch (Actions.hideLoader());
        });
      }
    };
  },

  _fetchNextRoute: (order) => {
    try {
      return checkout._nextCheckoutStepRoute(order);
    } catch (err) {
      if (err instanceof InvalidCheckoutStepException) {
        return '/cart';
      }
      else {
        if (err instanceof InvalidOrderTransitionException) {
          return '/';
        }
      }
    }
  },

  _nextCheckoutStepRoute: (order) => {
    let currentStep = order.state;
    let currentStepIndex = order.checkout_steps.indexOf(currentStep.trim());

    /* If currentStep is a valid step and not the last step.
       Last step is 'complete' which means order is placed. */
    if (currentStepIndex > -1 || currentStep === 'cart') {
      if (currentStepIndex < (order.checkout_steps.length - 1)) {
        return `/checkout/${order.checkout_steps[currentStepIndex + 1]}`;
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
