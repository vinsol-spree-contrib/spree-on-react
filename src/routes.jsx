import React from 'react';
import { Route } from 'react-router';

import HomePageConnector from './containers/home-page-connector';
import ProductShowConnector from './containers/product/product-show-connector';
import CartShowConnector from './containers/cart/cart-show-connector';

import AddressFormConnector from './containers/checkout-steps/address-form-connector';
import DeliveryFormConnector from './containers/checkout-steps/delivery-form-connector';
import PaymentFormConnector from './containers/checkout-steps/payment-form-connector';
import CheckoutSuccessConnector from './containers/checkout-steps/checkout-success-connector';
import CheckoutConfirmationConnector from './containers/checkout-steps/confirmation-form-connector';
import OrderShowConnector from './containers/order/show-connector';
import OrderListConnector from './containers/order/list-connector';

export default function configRoutes() {
  return (
    <Route>
      <Route path='/' component={HomePageConnector} />
      <Route path='/products/:productId' component={ProductShowConnector} />
      <Route path='/cart' component={CartShowConnector} />
      <Route path='/checkout/address' component={AddressFormConnector} />
      <Route path='/checkout/delivery' component={DeliveryFormConnector} />
      <Route path='/checkout/payment' component={PaymentFormConnector} />
      <Route path='/checkout/confirm' component={CheckoutConfirmationConnector} />
      <Route path='/checkout/complete' component={CheckoutSuccessConnector} />
      <Route path='/orders' component={OrderListConnector} />
      <Route path='/orders/:orderId' component={OrderShowConnector} />
      <Route path='/t/*' component={HomePageConnector} />
    </Route>

  );
};
