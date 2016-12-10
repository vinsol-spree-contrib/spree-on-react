import React from 'react';
import { Route } from 'react-router';

import HomePageConnector from './containers/home-page-connector';
import ProductShowConnector from './containers/product/product-show-connector';
import CartShowConnector from './containers/cart/cart-show-connector';

import AddressFormConnector from './containers/checkout-steps/address-form-connector';
import DeliveryFormConnector from './containers/checkout-steps/delivery-form-connector';

export default function configRoutes() {
  return (
    <Route>
      <Route path='/' component={HomePageConnector} />
      <Route path='/products/:productId' component={ProductShowConnector} />
      <Route path='/cart' component={CartShowConnector} />
      <Route path='/checkout/address' component={AddressFormConnector} />
      <Route path='/checkout/delivery' component={DeliveryFormConnector} />
      <Route path='/t/*' component={HomePageConnector} />
    </Route>

  );
};
