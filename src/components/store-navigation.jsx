import React, { Component } from 'react';
import NavLinks from './navigation-link'

class StoreNavigation extends Component {
  render () {
    return (
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <NavLinks/>
        </ul>
      </div>
    )
  }
}

export default StoreNavigation;
