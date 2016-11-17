import React, { Component } from 'react';
import '../App.css';

import HeaderConnector from '../containers/header-connector';
import HomePageConnector from '../containers/home-page-connector';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <HeaderConnector />
          </div>
        </nav>
        <HomePageConnector />
      </div>
    );
  }
}

export default App;
