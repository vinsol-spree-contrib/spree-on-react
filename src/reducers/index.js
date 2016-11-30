import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';
import order from './order';
import flash from './flash';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  order,
  flash
});

export default AppReducer;
