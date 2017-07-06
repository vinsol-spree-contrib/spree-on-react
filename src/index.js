import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
// Load locales that need to be supported
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import localeData from './../build/app-translations.json';

import Main from './components/main';

/*
  We are still loading bootstrap via CSS directly. Not using css-modules here.
*/
import styles from 'bootstrap/dist/css/bootstrap.css';
import bootstrapTheme from 'bootstrap/dist/css/bootstrap-theme.css';

/*
  These are non css-modules styles.
*/
import './components/styles/theme-global.scss';

addLocaleData([...en, ...es]);

/*
  Define user's language. Different browsers have the user locale defined
  on different fields on the `navigator` object, so we make sure to account
  for these different by checking all of them.
*/
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <Main style={ bootstrapTheme + ' ' + styles} />
  </IntlProvider>
  ,
  document.getElementById('root')
);
