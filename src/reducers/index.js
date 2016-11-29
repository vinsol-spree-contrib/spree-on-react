import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  routing: routerReducer
});

export default AppReducer;
