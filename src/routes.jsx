import React from 'react';
import { Route } from 'react-router';

import App from './components/app';

export default function configRoutes() {
  return (
    <Route path='/' component={App}>
    </Route>
  );
};
