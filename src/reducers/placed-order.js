import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  shipments: [],
  state: 'complete'
};

const placedOrder = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_PLACED_ORDER:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

export default placedOrder;
