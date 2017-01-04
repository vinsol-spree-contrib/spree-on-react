import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  shipments: [],
  checkout_steps: [],
  state: 'complete'
};

const placedOrder = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_PLACED_ORDER:
      return Object.assign({}, action.payload);
    case APP_ACTIONS.DESTROY_PLACED_ORDER:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default placedOrder;
