import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';
import order from './order';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  order
});

export default AppReducer;
