import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import PhoneNumber from './components/pages/PhoneNumber/phoneNumber';
import Confirm from './components/pages/Confirm/confirm';
import NotFound from './components/pages/NotFound/notFound';

const Router = () => {
  return (
    <Switch>
      <Route path='/home/:code?' exact component={Home} />
      <Route path='/phonenumber' component={PhoneNumber} />
      <Route path='/confirm' component={Confirm} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Router;