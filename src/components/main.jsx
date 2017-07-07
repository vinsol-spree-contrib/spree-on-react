import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import spreeStore from '../store';
import history from '../browser-history';
import configRoutes from '../routes';
import ConnectedIntlProvider from '../connected-intl-provider';

class Main extends Component {
  render() {
    return (
      <Provider store={ spreeStore }>
        <ConnectedIntlProvider>
          <Router history={ history }>
            { configRoutes() }
          </Router>
        </ConnectedIntlProvider>
      </Provider>
    );
  }
}

export default Main;
