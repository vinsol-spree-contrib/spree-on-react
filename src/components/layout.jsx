import React, { Component } from 'react';
import HeaderConnector from '../containers/header-connector';
import FlashConnector from '../containers/flash-connector';

class Layout extends Component {
  render() {
    // <aside className="visible-xs header-menu-dropdown">
    //   <a href="javascript:" className="glyphicon glyphicon-remove-circle header-menu-close"></a>
    //   <div className="header-menu-holder">ashwani</div>
    // </aside>
    return (
      <div>
        <HeaderConnector />

        <div className="container-fluid no-margin">
          <div className="flash-message-container">
            <FlashConnector />
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Layout;
