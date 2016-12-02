import React, { Component } from 'react';
import ProductSearchBarConnector from '../containers/product-search-bar-connector';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar-header">
          <Link className="navbar-brand" to='/'>
            SpreeCommerce
          </Link>
        </div>
        <ProductSearchBarConnector />
      </div>
    );
  }
}

export default Header;
