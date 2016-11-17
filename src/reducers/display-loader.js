import APP_ACTIONS from '../constants/app-actions';

const initialState = true;

const displayLoader = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.DISPLAY_LOADER:
      return true;
    case APP_ACTIONS.HIDE_LOADER:
      return false;
    default:
      return state;
  }
}

export default displayLoader;
