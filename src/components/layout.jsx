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

        <footer className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 footer-left-content">Copyright &copy; 2017 FashionHub.com</div>
              <div className="col-sm-6 footer-right-content">A product from <a href="http://vinsol.com" target="_blank">VinSol.com</a></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
