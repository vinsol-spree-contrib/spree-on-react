import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import configRoutes from '../routes';

class Main extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        { configRoutes() }
      </Router>
    );
  }
}

export default Main;
