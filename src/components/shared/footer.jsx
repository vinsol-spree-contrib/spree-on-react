import React, { Component } from 'react';
import LocaleSelectorConnector from '../../containers/locale-selector-connector';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 footer-left-content">
              &copy; 2017 &nbsp;
              <a href="http://vinsol.com" target="_blank">
                VinSol
              </a>
            </div>
            <div className="col-sm-6 footer-right-content">
              <LocaleSelectorConnector />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
