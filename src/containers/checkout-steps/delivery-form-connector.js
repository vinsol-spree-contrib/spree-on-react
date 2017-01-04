import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import APP_ACTIONS from '../../constants/app-actions';
import DeliveryForm from '../../components/checkout-steps/delivery-form';
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
        payload: 'delivery'
      });
    },

    handleDeliveryFormSubmit: (formData, order) => {
      dispatch (Actions.goToNextStep(order, formData));
    },

    handleCheckoutStepNotEditable: (order, placedOrder) => {
      /* Redirect to last step if order is already placed */
      if (placedOrder.id) {
        dispatch (push(APP_ROUTES.checkout[`${ placedOrder.checkout_steps.slice(-1) }PageRoute`]));
      }
      else {
        if (order.id) {
          const previousStep = CheckoutStepCalculator.previous(order.checkout_steps, 'delivery');

          dispatch ( push(APP_ROUTES.checkout[`${ previousStep }PageRoute`]));
        }
        else {
          dispatch ( push(APP_ROUTES.cartPageRoute));
        }
      }
    }
  };
};

const DeliveryFormConnector = connect(mapStateToProps, mapDispatchToProps)(DeliveryForm);

export default DeliveryFormConnector;
