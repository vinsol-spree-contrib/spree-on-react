import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import CheckoutSuccessForm from '../../components/checkout-steps/checkout-success-form';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckoutStepNotEditable: () => {
      dispatch ( push('/'));
    }
  };
};

const CheckoutSuccessConnector = connect(mapStateToProps, mapDispatchToProps)(CheckoutSuccessForm);

export default CheckoutSuccessConnector;
