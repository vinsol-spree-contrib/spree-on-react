import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import CheckoutSuccessForm from '../../components/checkout-steps/checkout-success-form';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    placedOrder: state.placedOrder
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAsPlaced: (order) => {
      dispatch(Actions.addPlacedOrder(order));
    },

    handleCheckoutStepNotEditable: () => {
      dispatch (push('/'));
    },

    clearOrder: () => {
      dispatch (Actions.clearOrder());
    }
  };
};

const CheckoutSuccessConnector = connect(mapStateToProps, mapDispatchToProps)(CheckoutSuccessForm);

export default CheckoutSuccessConnector;
