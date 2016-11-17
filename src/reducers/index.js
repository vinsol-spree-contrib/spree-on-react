import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';

const AppReducer = combineReducers({
  displayLoader,
  products
});

export default AppReducer;
