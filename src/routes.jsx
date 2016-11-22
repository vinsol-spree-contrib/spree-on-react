import React from 'react';
import { Route } from 'react-router';

import HomePageConnector from './containers/home-page-connector';
import ProductShow from './components/product/show';

export default function configRoutes() {
  return (
    <Route>
      <Route path='/' component={HomePageConnector} />
      <Route path='/products/:productId' component={ProductShow} />
    </Route>

  );
};
