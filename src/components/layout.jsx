import React, { Component } from 'react';
import HeaderConnector from '../containers/header-connector';
import CartNotificationInfoConnector from '../containers/cart/notification-info-connector';

class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <HeaderConnector />
            <CartNotificationInfoConnector />
          </div>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
