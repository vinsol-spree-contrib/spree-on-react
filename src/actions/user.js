import APP_ACTIONS from '../constants/app-actions';
import localStorageAPI from '../services/local-storage-api';
import OrdersAPI from '../apis/order';
import orderActions from './order';

const user = {
  login: (userResponse) => {
    return (dispatch, getState) => {

      dispatch( {
        type: APP_ACTIONS.LOGIN,
        payload: userResponse
      });

      OrdersAPI.getCurrent(userResponse.token).then((response) => {
        dispatch (orderActions.updateOrderInState(response.body));
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
      dispatch (orderActions.clearOrder());
    }
  }
};

export default user;
