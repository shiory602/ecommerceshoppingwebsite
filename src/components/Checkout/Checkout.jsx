import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CheckoutInformation from './CheckoutMain/CheckoutInformation';
import CheckoutShipping from './CheckoutMain/CheckoutShipping';
// import PageNotFound from '../PageNotFound/PageNotFound';

import CheckoutSide from './CheckoutSide/CheckoutSide';

export default function Checkout(props) {
    const [check, setCheck] = useState('Information');
    const handleClick = (v) => {
        setCheck(v);
    }

    return(
        <>
        <div className='d-flex justify-content-center'>
            {check === 'Information' ? <CheckoutInformation handleClick={handleClick} /> : <CheckoutShipping />}
            <CheckoutSide categories={props.categories} productsData={props.productsData} />
        </div>

        <Switch>
            <Route exact path='/checkoutinformation'>
                <CheckoutInformation categories={props.categories} productsData={props.productsData} />
            </Route>
            <Route exact path='/checkoutshipping'>
                <CheckoutShipping />
            </Route>
            {/* <Route component={PageNotFound} /> */}
        </Switch>
        </>
    )
}