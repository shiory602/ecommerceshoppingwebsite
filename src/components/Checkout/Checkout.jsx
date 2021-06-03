import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CheckoutInformation from './CheckoutMain/CheckoutInformation';
import CheckoutShipping from './CheckoutMain/CheckoutShipping';
import PageNotFound from '../PageNotFound/PageNotFound';

import CheckoutSide from './CheckoutSide/CheckoutSide';

export default function Checkout(props) {
    return(
        <>
        <div className='d-flex justify-content-center'>
            <Link to='./CheckoutMain/CheckoutInformation.jsx'>Informationへ</Link>
            <Link to='./CheckoutMain/CheckoutShipping.jsx'>Shipping</Link>
            <Link to='/'></Link>
            <CheckoutSide categories={props.categories} productsData={props.productsData} />
        </div>

        <Switch>
            <Route exact path='/checkoutinformation'>
                <CheckoutInformation categories={props.categories} productsData={props.productsData} />
            </Route>
            <Route exact path='/checkoutshipping'>
                <CheckoutShipping />
            </Route>
            <Route component={PageNotFound} />
        </Switch>
        </>
    )
}