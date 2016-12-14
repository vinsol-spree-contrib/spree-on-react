import APP_ACTIONS from '../constants/app-actions';

const placedOrder = {
  addPlacedOrder: (order) => {
    return {
      type: APP_ACTIONS.ADD_PLACED_ORDER,
      payload: order
    }
  }
};

export default placedOrder;
