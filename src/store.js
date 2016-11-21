import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';

import AppReducer from './reducers/index';

/* Building a store */
const logger = createLogger();

const spreeStore = createStore(AppReducer, applyMiddleware(logger));

export default spreeStore;
