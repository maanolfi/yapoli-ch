import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/LoginR';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
}
