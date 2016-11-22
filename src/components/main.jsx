import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import HeaderConnector from '../containers/header-connector';
import configRoutes from '../routes';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <HeaderConnector />
          </div>
        </nav>
        <Router history={browserHistory}>
          { configRoutes() }
        </Router>
      </div>
    );
  }
}

export default Main;
