import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';

/*
  Load locales that need to be supported
*/
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

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

ReactDOM.render(
  <Main style={ bootstrapTheme + ' ' + styles} />
  ,
  document.getElementById('root')
);
