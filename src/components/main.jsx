import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import spreeStore from '../store';
import history from '../browser-history';
import configRoutes from '../routes';

class Main extends Component {
  render() {
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
