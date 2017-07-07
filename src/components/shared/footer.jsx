import React, { Component } from 'react';
import LocaleSelectorConnector from '../../containers/locale-selector-connector';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 footer-left-content">
              Copyright &copy; 2017 FashionHub.com
            </div>
            <div className="col-sm-6 footer-right-content">
              <div className="col-sm-8">
                A product from 
                <a href="http://vinsol.com" target="_blank">
                  VinSol.com
                </a>
              </div>

              <div className={ "col-sm-4 " }>
                <LocaleSelectorConnector />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
