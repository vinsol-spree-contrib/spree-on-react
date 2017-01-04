import APP_ACTIONS from '../constants/app-actions';
import localStorageAPI from '../services/local-storage-api';

const placedOrder = {
  addPlacedOrder: (order) => {
    return (dispatch, getState) => {
      dispatch ({ type: APP_ACTIONS.ADD_PLACED_ORDER, payload: order });
      localStorageAPI.save(getState());
    }
  },

  clearPlacedOrder: () => {
    return (dispatch, getState) => {
      dispatch( { type: APP_ACTIONS.DESTROY_PLACED_ORDER } );
      localStorageAPI.save(getState());
    };
  }
};

export default placedOrder;
