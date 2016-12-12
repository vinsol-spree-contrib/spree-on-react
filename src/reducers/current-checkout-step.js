import APP_ACTIONS from '../constants/app-actions';

const initialState = "";

const currentCheckoutStep = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_CURRENT_CHECKOUT_STEP:
      return action.payload;
    case APP_ACTIONS.CLEAR_CURRENT_CHECKOUT_STEP:
      return initialState;
    default:
      return state;
  }
}

export default currentCheckoutStep;
