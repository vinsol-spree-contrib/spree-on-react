import { combineReducers } from 'redux';

import displayLoader from './display-loader';
import products from './products';
import taxonomies from './taxonomies';
import productsSearch from './products-search';

const AppReducer = combineReducers({
  displayLoader,
  products,
  taxonomies,
  productsSearch
});

export default AppReducer;
