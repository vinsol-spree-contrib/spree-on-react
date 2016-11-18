import APP_ACTIONS from '../constants/app-actions';

const initialState = [];

const taxonomies = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_TAXONOMIES:
      return Object.assign( [], action.payload);
    default:
      return state;
  }
}

export default taxonomies;
