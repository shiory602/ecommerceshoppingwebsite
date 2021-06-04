import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CheckoutInformation from './CheckoutMain/CheckoutInformation';
import CheckoutPay from './CheckoutMain/CheckoutPay';

import CheckoutSide from './CheckoutSide/CheckoutSide';

export default function Checkout(props) {
    const [check, setCheck] = useState('Information');
    const handleClick = (v) => {
        setCheck(v);
    }

    return(
        <>
        <div className='d-flex justify-content-center'>
            {check === 'Information' ? <CheckoutInformation handleClick={handleClick} categories={props.categories} products={props.products} /> : <CheckoutPay handleClick={handleClick} categories={props.categories} />}
            <CheckoutSide products={props.products} />
        </div>

        <Switch>
            <Route exact path='/checkoutinformation'>
                <CheckoutInformation categories={props.categories} productsData={props.productsData} />
            </Route>
            <Route exact path='/checkoutshipping'>
                <CheckoutPay />
            </Route>
        </Switch>
        </>
    )
}