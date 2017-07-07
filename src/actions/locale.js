import APP_ACTIONS from '../constants/app-actions';
import localStorageAPI from '../services/local-storage-api';

const locale = {
  setLocale: (locale) => {
    return (dispatch, getState) => {
      dispatch({ type: APP_ACTIONS.SET_LOCALE, payload: { locale: locale } });

      localStorageAPI.save(getState());
    }
  }
};

export default locale;
