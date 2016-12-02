import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import spreeStore from '../store';
import configRoutes from '../routes';

class Main extends Component {
  render() {
    const history = syncHistoryWithStore(browserHistory, spreeStore);

    return (
      <Provider store={ spreeStore }>
        <Router history={ history }>
          { configRoutes() }
        </Router>
      </Provider>
    );
  }
}

export default Main;
