import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  message: null,
  type: null,
  visible: false
};

const flash = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_FLASH:
      return action.payload;
    case APP_ACTIONS.HIDE_FLASH:
      return initialState;
    default:
      return state;
  }
}

export default flash;
