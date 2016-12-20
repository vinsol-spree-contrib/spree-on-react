import { connect } from 'react-redux';

import OrderSummary from '../../components/order/summary';

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    currentCheckoutStep: state.currentCheckoutStep
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

const OrderSummaryConnector = connect(mapStateToProps, mapDispatchToProps)(OrderSummary);

export default OrderSummaryConnector;
