import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import localStorageAPI from './services/local-storage-api';

import AppReducer from './reducers/index';

/* Building a store */
const logger = createLogger();

let spreeStoreVariable;
const dataFromLocalStorage = localStorageAPI.load();

if (dataFromLocalStorage) {
  spreeStoreVariable = createStore(AppReducer, dataFromLocalStorage, applyMiddleware(thunk, routerMiddleware(browserHistory), logger));
}
else {
  spreeStoreVariable = createStore(AppReducer, applyMiddleware(thunk, logger));
}

const spreeStore = spreeStoreVariable;

export default spreeStore;
