import { connect } from 'react-redux';

import CartNotificationInfo from '../../components/cart/notification-info';

const mapStateToProps = (state, ownProps) => {
  return {
    lineItems: state.order.line_items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CartNotificationInfoConnector = connect(mapStateToProps, mapDispatchToProps)(CartNotificationInfo);

export default CartNotificationInfoConnector;
