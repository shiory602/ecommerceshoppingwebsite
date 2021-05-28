import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Top from './Top/Top';
import Product from './Product/Product';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Top}></Route>
      <Route exact path='/product' component={Product}></Route>
    </Switch>
  );
}

export default Main;