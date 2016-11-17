import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import AppReducer from './reducers/index';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app.jsx';
import './index.css';

/* Building a store */
const logger = createLogger();

const spreeStore = createStore(AppReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={ spreeStore } >
    <App />
  </Provider>,
  document.getElementById('root')
);
