import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configRoutes from '../routes';

class Main extends Component {
  render() {
    const history = syncHistoryWithStore(browserHistory, this.context.store);

    return (
      <Router history={history}>
        { configRoutes() }
      </Router>
    );
  }
}

export default Main;
Main.contextTypes = { store: React.PropTypes.object };
