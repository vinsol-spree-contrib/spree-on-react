import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Actions from '../../actions';
import OrderList from '../../components/order/list';
import OrdersAPI from '../../apis/order';
import APP_ROUTES from '../../constants/app-routes';

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orderList.orders,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userAPIToken) => {
      dispatch (Actions.displayLoader());

      return OrdersAPI.mine(userAPIToken).then((response) => {
        let fetchedOrders = response.body;

        dispatch (Actions.addOrders(fetchedOrders));
        dispatch (Actions.hideLoader());
      });
    },

    handleUserNotLoggedIn: () => {
      dispatch(push(APP_ROUTES.homePageRoute));
      dispatch(Actions.showFlash("Please Sign in to view your orders"));
    }
  };
};

const OrderListConnector = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListConnector;
