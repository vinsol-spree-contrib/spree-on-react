import APP_ACTIONS from '../constants/app-actions';
import OrderFinder from '../services/order-finder';

const initialState = {
  orders: []
};

const orderList = function(state = initialState, action) {
  let newOrderList, orderInList;

  switch (action.type) {
    case APP_ACTIONS.ADD_ORDERS:
      return Object.assign({}, state, action.payload);

    case APP_ACTIONS.ADD_ORDER:
      orderInList = OrderFinder.find(action.payload.id, state.orders);

      if (orderInList) {
        return state;
      }
      else {
        newOrderList = Object.assign( [], state.orders );
        newOrderList.push(action.payload);
        return Object.assign ( {}, state, { orders: newOrderList } );
      }

    default:
      return state;
  }
}

export default orderList;
