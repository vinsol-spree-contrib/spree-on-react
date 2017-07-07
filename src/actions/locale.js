import APP_ACTIONS from '../constants/app-actions';

const locale = {
  setLocale: (locale) => {
    return {
      type: APP_ACTIONS.SET_LOCALE,
      payload: { locale: locale }
    };
  }
};

export default locale;
