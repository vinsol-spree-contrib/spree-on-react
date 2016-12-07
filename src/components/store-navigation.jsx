import React, { Component } from 'react';
import NavLinks from './navigation-link'

class StoreNavigation extends Component {
  render () {
    return (
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="link-block">
            <a className="primary-link">Home</a>
          </li>
          <li className="link-block">
            <a className="primary-link">About</a>
          </li>
          <li className="link-block">
            <a className="primary-link">User link 1</a>
          </li>
          <li className="link-block">
            <a className="primary-link">User link 1</a>
          </li>
          <li className="link-block">
            <a className="primary-link">User link 1</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default StoreNavigation;