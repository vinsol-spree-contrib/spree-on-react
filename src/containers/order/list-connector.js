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

      OrdersAPI.mine('b184fdf5f6e46da5cdfd5af9b14968537c5cd87f9ede2dc6').then((response) => {
        let fetchedOrders = response.body;

        dispatch (Actions.addOrders(fetchedOrders));
        dispatch (Actions.hideLoader());
      });
    }
  };
};

const OrderListConnector = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListConnector;
