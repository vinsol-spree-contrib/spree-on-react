import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import HeaderConnector from '../containers/header-connector';
import configRoutes from '../routes';

class Main extends Component {
  render() {
    const history = syncHistoryWithStore(browserHistory, this.context.store);

    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <HeaderConnector />
          </div>
        </nav>
        <div className="container-fluid">
          <Router history={history}>
            { configRoutes() }
          </Router>
        </div>
      </div>
    );
  }
}

export default Main;
Main.contextTypes = { store: React.PropTypes.object };
