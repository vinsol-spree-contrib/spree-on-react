import { connect } from 'react-redux';

import CartNotificationInfo from '../../components/cart/notification-info';

/*
  Pass line items only if order is not complete.
*/
const mapStateToProps = (state, ownProps) => {
  let lineItems = [];
  if (state.order.state !== 'complete') {
    lineItems = state.order.line_items;
  }

  return {
    lineItems: lineItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CartNotificationInfoConnector = connect(mapStateToProps, mapDispatchToProps)(CartNotificationInfo);

export default CartNotificationInfoConnector;
