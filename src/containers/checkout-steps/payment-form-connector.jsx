import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import APP_ACTIONS from '../../constants/app-actions';
import PaymentForm from '../../components/checkout-steps/payment-form';
import CheckoutStepCalculator from '../../services/checkout-step-calculator';
import APP_ROUTES from '../../constants/app-routes';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    placedOrder: state.placedOrder
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCheckoutStep: () => {
      dispatch ({
        type: APP_ACTIONS.SET_CURRENT_CHECKOUT_STEP,
        payload: 'payment'
      });
    },

    handlePaymentFormSubmit: (formData, order) => {
      formData.order.payments_attributes['0']['amount'] = order.total;
      return dispatch (Actions.goToNextStep(order, formData));
    },

    handleCheckoutStepNotEditable: (order, placedOrder) => {
      /* Redirect to last step if order is already placed */
      if (placedOrder.id) {
        dispatch (push(APP_ROUTES.checkout[`${ placedOrder.checkout_steps.slice(-1) }PageRoute`]));
      }
      else {
        const previousStep = CheckoutStepCalculator.previous(order.checkout_steps, 'payment');

        dispatch ( push(APP_ROUTES.checkout[`${ previousStep }PageRoute`]));
      }
    },

    showFormErrors: (errorNode) => {
      dispatch (Actions.showFlash(errorNode, 'danger'));
    }
  };
};

const PaymentFormConnector = connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

export default PaymentFormConnector;
