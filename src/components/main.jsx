import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import HeaderConnector from '../containers/header-connector';
import CartConnector from '../containers/cart-connector';
import configRoutes from '../routes';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <HeaderConnector />
            <CartConnector />
          </div>
        </nav>
        <div className="container-fluid">
          <Router history={browserHistory}>
            { configRoutes() }
          </Router>
        </div>
      </div>
    );
  }
}

export default Main;
