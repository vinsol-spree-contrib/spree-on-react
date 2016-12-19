import APP_ACTIONS from '../constants/app-actions';

const user = {
  login: (userResponse) => {
    return {
      type: APP_ACTIONS.LOGIN,
      payload: userResponse
    };
  },

  logout: () => {
    return {
      type: APP_ACTIONS.LOGOUT
    };
  }
};

export default user;
