import React, { Component } from 'react';

import HeaderConnector from '../containers/header-connector';
import HomePageConnector from '../containers/home-page-connector';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderConnector />
        <HomePageConnector />
      </div>
    );
  }
}

export default App;
