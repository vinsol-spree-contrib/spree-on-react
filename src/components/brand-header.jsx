import React, { Component } from 'react';
import siteLogo from '../images/logo.png';

class BrandHeader extends Component {
  render() {
    return (
      <div className="navbar-header">
        <a className="navbar-brand" href='/'>
          <img className='img-responsive' src={siteLogo} alt='SpreeCommerce'/>
        </a>
      </div>
    );
  }
}

export default BrandHeader;
