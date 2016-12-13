import { connect } from 'react-redux';

import CheckoutSuccessForm from '../../components/checkout-steps/checkout-success-form';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CheckoutSuccessConnector = connect(mapStateToProps, mapDispatchToProps)(CheckoutSuccessForm);

export default CheckoutSuccessConnector;
