import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import displayLoader from './display-loader';
import productList from './product-list';
import taxons from './taxons';
import order from './order';
import orderList from './order-list';
import flash from './flash';
import countryList from './country-list';
import currentCheckoutStep from './current-checkout-step';
import placedOrder from './placed-order';
import user from './user';
import locale from './locale';

const AppReducer = combineReducers({
  displayLoader,
  productList,
  taxons,
  order,
  orderList,
  flash,
  countryList,
  currentCheckoutStep,
  placedOrder,
  user,
  locale,
  routing: routerReducer,
  form: formReducer
});

export default AppReducer;
