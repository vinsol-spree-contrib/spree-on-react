import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import siteLogo from '../../../images/logo2.png';
import APP_ROUTES from '../../../constants/app-routes';
import styles from './styles/header-styles.scss';

class BrandHeader extends Component {
  render() {
    return (
      <Link to={ APP_ROUTES.homePageRoute } className={ styles.navBarHeader }>
        Spree On React
      </Link>
    );
  }
}

export default BrandHeader;
