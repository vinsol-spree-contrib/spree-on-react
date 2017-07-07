import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import localeData from './../build/app-translations.json';
import SUPPORTED_LOCALES from './constants/supported-locales';

function mapStateToProps(state) {
  /*
    Define user's language. Different browsers have the user locale defined
    on different fields on the `navigator` object, so we make sure to account
    for these different by checking all of them.
  */
  let language = state.locale.currentLocale;
  if (!Object.keys(SUPPORTED_LOCALES).includes(language)) {
    language = (navigator.languages && navigator.languages[0]) ||
                navigator.language ||
                navigator.userLanguage;

  }

  /*
    Split locales with a region code
  */
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

  /*
    Try full locale, try locale without region code, fallback to 'en'
  */
  const messages =  localeData[language] ||
                    localeData[languageWithoutRegionCode] ||
                    localeData.en;

  return ({ locale: state.locale.currentLocale, messages: messages });
}

export default connect(mapStateToProps)(IntlProvider);
