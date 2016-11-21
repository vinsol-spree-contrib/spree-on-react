import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import Product from './components/product';

export default function configRoutes() {
  return (
    <Route>
      <Route path='/' component={App} />
      <Route path='/products/:productId' component={Product} />
    </Route>

  );
};
