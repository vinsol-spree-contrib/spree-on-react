import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import HeaderConnector from '../containers/header-connector';
import StoreNavigation from './store-navigation';
import configRoutes from '../routes';

class Main extends Component {
  render() {
    return (
      <div>
        <HeaderConnector />
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
