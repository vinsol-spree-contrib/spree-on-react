import React, { Component } from 'react';
import NavLinks from './navigation-link'
import ProductSearchBarConnector from '../containers/product-search-bar-connector';

class StoreNavigation extends Component {
  render () {
    return (
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <NavLinks/>
          <ProductSearchBarConnector />
        </ul>
      </div>
    )
  }
}

export default StoreNavigation;
