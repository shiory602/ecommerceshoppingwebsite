import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Product from './Product/Product';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/product' component={Product}></Route>
    </Switch>
  );
}

export default Main;