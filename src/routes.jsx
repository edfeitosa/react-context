import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home/home';
import NotFound from './components/pages/NotFound/notFound';

const Router = () => {
  return (
    <Switch>
      <Route path='/:code?' exact component={Home} />
      <Route path='/home/:code?' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}

export default Router;