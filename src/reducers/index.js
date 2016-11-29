import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';
import flash from './flash';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  flash
});

export default AppReducer;
