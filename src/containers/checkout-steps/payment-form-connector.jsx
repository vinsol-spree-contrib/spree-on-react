import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import APP_ACTIONS from '../../constants/app-actions';
import PaymentForm from '../../components/checkout-steps/payment-form';

import APP_ROUTES from '../../constants/app-routes';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCheckoutStep: () => {
      dispatch({
        type: APP_ACTIONS.SET_CURRENT_CHECKOUT_STEP,
        payload: 'payment'
      });
    },

    handlePaymentFormSubmit: (formData, order) => {
      formData.order.payments_attributes['0']['amount'] = order.total;
      dispatch (Actions.goToNextStep(order, formData));
    },

    handleCheckoutStepNotEditable: () => {
      dispatch ( push(APP_ROUTES.homePageRoute));
    }
  };
};

const PaymentFormConnector = connect(mapStateToProps, mapDispatchToProps)(PaymentForm);

export default PaymentFormConnector;
