import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger';

import AppReducer from './reducers/index';

/* Building a store */
const logger = createLogger();

const spreeStore = createStore(AppReducer, applyMiddleware(logger, routerMiddleware(browserHistory)));

export default spreeStore;
