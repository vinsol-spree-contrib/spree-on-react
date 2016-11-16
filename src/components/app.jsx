import React, { Component } from 'react';
import '../App.css';

import Header from './header';
import HomePage from './home-page';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <Header />
          </div>
        </nav>
        <HomePage />
      </div>
    );
  }
}

export default App;
