import React from 'react';
import { Route } from 'react-router';

import HomePageConnector from './containers/home-page-connector';
import ProductShowConnector from './containers/product/product-show-connector';

export default function configRoutes() {
  return (
    <Route>
      <Route path='/' component={HomePageConnector} />
      <Route path='/products/:productId' component={ProductShowConnector} />
      <Route path='/t/*' component={HomePageConnector} />
    </Route>

  );
};
