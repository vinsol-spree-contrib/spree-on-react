import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import APP_ACTIONS from '../../constants/app-actions';
import ConfirmationForm from '../../components/checkout-steps/confirmation-form';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckoutStepNotEditable: () => {
      dispatch (push('/'));
    },

    setCurrentCheckoutStep: () => {
      dispatch({
        type: APP_ACTIONS.SET_CURRENT_CHECKOUT_STEP,
        payload: 'confirm'
      });
    },

    handleFormSubmit: (formData, order) => {
      dispatch (Actions.goToNextStep(order, formData));
    },
  };
};

const CheckoutConfirmationConnector = connect(mapStateToProps, mapDispatchToProps)(ConfirmationForm);

export default CheckoutConfirmationConnector;
