import { connect } from 'react-redux';

import Actions from '../../actions';
import OrderList from '../../components/order/list';
import OrdersAPI from '../../apis/order';

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orderList.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => {
      dispatch (Actions.displayLoader());

      return OrdersAPI.mine('9c54101b71a35da0d694f1ad02230eadd12227abbea90ce1').then((response) => {
        let fetchedOrders = response.body;

        dispatch (Actions.addOrders(fetchedOrders));
        dispatch (Actions.hideLoader());
      });
    }
  };
};

const OrderListConnector = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListConnector;
