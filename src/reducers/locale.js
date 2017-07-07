import APP_ACTIONS from '../constants/app-actions';

const initialState = {
  currentLocale: 'en',
  messages: {}
};

const locale = function(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_LOCALE:
      return Object.assign({}, state, { currentLocale: action.payload.locale });
    default:
      return state;
  }
}

export default locale;
