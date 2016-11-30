import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import productList from './product-list';
import taxonomies from './taxonomies';
import flash from './flash';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  flash,
  productList,
  taxonomies
});

export default AppReducer;
