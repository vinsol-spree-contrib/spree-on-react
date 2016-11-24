import React, { Component } from 'react';
import ProductSearchBarConnector from '../containers/product-search-bar-connector';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href='/'>
              SpreeCommerce
            </a>
          </div>
          <ProductSearchBarConnector />
        </div>
      </nav>
    );
  }
}

export default Header;
