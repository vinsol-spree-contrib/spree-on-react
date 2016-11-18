import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies
});

export default AppReducer;
