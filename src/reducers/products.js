import APP_ACTIONS from '../constants/app-actions';

const initialState = [];

const displayLoader = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_PRODUCTS:
      return Object.assign( [], action.payload);
    default:
      return state;
  }
}

export default displayLoader;
