import React from 'react';
import ReactDOM from 'react-dom';
import spreeStore from './store';

import { Provider } from 'react-redux';
import Main from './components/main.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={ spreeStore }>
    <Main />
  </Provider>,
  document.getElementById('root')
);
