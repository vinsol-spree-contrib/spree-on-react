import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="navbar-header">
        <Link className="navbar-brand" to='/'>
          SpreeCommerce
        </Link>
      </div>
    );
  }
}

export default Header;
