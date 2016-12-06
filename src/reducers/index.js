import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import displayLoader from './display-loader';
import productList from './product-list';
import taxons from './taxons';
import order from './order';
import flash from './flash';

const AppReducer = combineReducers({
  displayLoader,
  productList,
  taxons,
  order,
  flash,
  routing: routerReducer,
  form: formReducer
});

export default AppReducer;
