import APP_ACTIONS from '../constants/app-actions';
import localStorageAPI from '../services/local-storage-api';
import OrdersAPI from '../apis/order';
import Actions from './';

const user = {
  login: (userResponse) => {
    return (dispatch, getState) => {

      dispatch( {
        type: APP_ACTIONS.LOGIN,
        payload: userResponse
      });

      dispatch (Actions.clearPlacedOrder());
      OrdersAPI.getCurrent(userResponse.token).then((response) => {
        dispatch (Actions.updateOrderInState(response.body));
      });

      localStorageAPI.save(getState());
    }
  },

  logout: () => {
    return (dispatch, getState) => {
      dispatch ({
        type: APP_ACTIONS.LOGOUT
      });
      localStorageAPI.clear();

      dispatch (Actions.clearPlacedOrder());
      dispatch (Actions.clearOrder());
    }
  }
};

export default user;
