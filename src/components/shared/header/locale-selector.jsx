import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import SUPPORTED_LOCALES from '../../../constants/supported-locales';
// import APP_ROUTES from '../../../constants/app-routes';
import styles from './styles/header-styles.scss';

class LocaleSelector extends Component {
  render() {
    const localeSelectorMarkup = Object.keys(SUPPORTED_LOCALES).map((localeKey, idx) => {
      return(<MenuItem key={`locale-menu-item-${ localeKey }`}>
              { SUPPORTED_LOCALES[localeKey] }
            </MenuItem>);
    });

    // TODO: Title
    return (
      <dd className={ "icon-block user-link-block " + styles.headerLanguage }>
        <DropdownButton title="English" className={ ' ' + styles.headerLanguageButton } bsStyle='link' id='user-account-dropdown'>
          { localeSelectorMarkup }
        </DropdownButton>
      </dd>
    );
  }
}

export default LocaleSelector;
