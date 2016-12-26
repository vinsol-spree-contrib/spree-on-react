import APP_ACTIONS from '../constants/app-actions';
import localStorageAPI from '../services/local-storage-api';

const user = {
  login: (userResponse) => {
    return (dispatch, getState) => {
      dispatch( {
        type: APP_ACTIONS.LOGIN,
        payload: userResponse
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

      dispatch ({
        type: 'RESET'
      });
    }
  }
};

export default user;
