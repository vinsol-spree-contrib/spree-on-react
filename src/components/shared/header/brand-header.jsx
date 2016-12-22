import React, { Component } from 'react';
import { Link } from 'react-router';

import siteLogo from '../../../images/logo.png';
import APP_ROUTES from '../../../constants/app-routes';

class BrandHeader extends Component {
  render() {
    return (
      <div className="navbar-header">
        <Link to={ APP_ROUTES.homePageRoute } className="navbar-brand">
          <img className='img-responsive' src={siteLogo} alt='SpreeCommerce'/>
        </Link>
      </div>
    );
  }
}

export default BrandHeader;
