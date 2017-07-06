import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxReset from 'redux-reset';

import history from './browser-history';
import localStorageAPI from './services/local-storage-api';
import AppReducer from './reducers/index';

/* Building a store */
const logger = createLogger();

let spreeStoreVariable;
const dataFromLocalStorage = localStorageAPI.load();

if (dataFromLocalStorage) {
  spreeStoreVariable = createStore(AppReducer, {order: dataFromLocalStorage.order, user: dataFromLocalStorage.user, placedOrder: dataFromLocalStorage.placedOrder}, applyMiddleware(thunk, routerMiddleware(history), logger), reduxReset());
}
else {
  spreeStoreVariable = createStore(AppReducer, applyMiddleware(thunk, routerMiddleware(history), logger), reduxReset());
}

const spreeStore = spreeStoreVariable;

export default spreeStore;
