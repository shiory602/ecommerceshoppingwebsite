import React, { useState } from 'react';
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
            {check === 'Information' ? <CheckoutSide products={props.products} /> : ''}
        </div>
        </>
    )
}