import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';
import order from './order';
import flash from './flash';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  routing: routerReducer,
  order,
  flash
});

export default AppReducer;
