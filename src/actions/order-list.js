import APP_ACTIONS from '../constants/app-actions';

const orderList = {
  addOrders: (ordersResponse) => {
    return {
      type: APP_ACTIONS.ADD_ORDERS,
      payload: ordersResponse
    };
  },

  addOrder: (order) => {
    return {
      type: APP_ACTIONS.ADD_ORDER,
      payload: order
    }
  }
};

export default orderList;
