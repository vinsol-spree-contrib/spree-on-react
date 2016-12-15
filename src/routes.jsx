import React from 'react';
import { Route } from 'react-router';

import HomePageConnector from './containers/home-page-connector';
import ProductShowConnector from './containers/product/product-show-connector';
import CartShowConnector from './containers/cart/cart-show-connector';

import AddressFormConnector from './containers/checkout-steps/address-form-connector';
import DeliveryFormConnector from './containers/checkout-steps/delivery-form-connector';
import PaymentFormConnector from './containers/checkout-steps/payment-form-connector';
import CheckoutConfirmationConnector from './containers/checkout-steps/confirmation-form-connector';
import CheckoutSuccessConnector from './containers/checkout-steps/checkout-success-connector';
import OrderListConnector from './containers/order/list-connector';
import OrderShowConnector from './containers/order/show-connector';

import APP_ROUTES from './constants/app-routes';

export default function configRoutes() {
  return (
    <Route>
      <Route path={ APP_ROUTES.homePageRoute } component={HomePageConnector} />
      <Route path='/products/:productId' component={ProductShowConnector} />
      <Route path={ APP_ROUTES.cartPageRoute } component={CartShowConnector} />
      <Route path={ APP_ROUTES.checkout.addressPageRoute } component={AddressFormConnector} />
      <Route path={ APP_ROUTES.checkout.deliveryPageRoute } component={DeliveryFormConnector} />
      <Route path={ APP_ROUTES.checkout.paymentPageRoute } component={PaymentFormConnector} />
      <Route path={ APP_ROUTES.checkout.confirmPageRoute } component={CheckoutConfirmationConnector} />
      <Route path={ APP_ROUTES.checkout.completePageRoute } component={CheckoutSuccessConnector} />
      <Route path={ APP_ROUTES.ordersPageRoute } component={OrderListConnector} />
      <Route path='/orders/:orderId' component={OrderShowConnector} />
      <Route path='/t/*' component={HomePageConnector} />
    </Route>

  );
};
