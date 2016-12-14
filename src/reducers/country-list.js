import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  countries: []
};

const countryList = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.ADD_COUNTRIES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default countryList;
