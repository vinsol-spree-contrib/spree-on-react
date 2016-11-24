import APP_ACTIONS from '../constants/app-actions';

const initialState = '';

const productsSearch = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
}

export default productsSearch;
