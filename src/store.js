import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import AppReducer from './reducers/index';

/* Building a store */
const logger = createLogger();

const spreeStore = createStore(AppReducer, applyMiddleware(thunk, logger));

export default spreeStore;
