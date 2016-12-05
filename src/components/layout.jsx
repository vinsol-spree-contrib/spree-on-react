import React, { Component } from 'react';
import HeaderConnector from '../containers/header-connector';
import FlashConnector from '../containers/flash-connector';
import CartNotificationInfoConnector from '../containers/cart/notification-info-connector';

class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderConnector />
        <CartNotificationInfoConnector />

        <div className="container-fluid">
          <div className="flash-message-container">
            <FlashConnector />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
