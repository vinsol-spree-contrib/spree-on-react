import React, { Component } from 'react';
import HeaderConnector from '../containers/header-connector';
import FlashConnector from '../containers/flash-connector';

class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderConnector />

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
