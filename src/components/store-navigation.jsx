import React, { Component } from 'react';
import NavLinks from './navigation-link'
import SearchModalConnector from '../containers/search-modal-connector';

class StoreNavigation extends Component {
  render () {
    return (
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <NavLinks/>
          <SearchModalConnector />
        </ul>
      </div>
    )
  }
}

export default StoreNavigation;
