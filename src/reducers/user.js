import APP_ACTIONS from '../constants/app-actions';

const initialState = {};

const taxons = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.LOGIN:
      return Object.assign( {}, action.payload);
    case APP_ACTIONS.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default taxons;
