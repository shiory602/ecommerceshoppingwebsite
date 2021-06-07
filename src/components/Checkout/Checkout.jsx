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
            {check === 'Information' ? <CheckoutInformation handleClick={handleClick} /> : <CheckoutPay handleClick={handleClick}/>}
            {check === 'Information' ? <CheckoutSide products={props.location.products} /> : ''}
        </div>
        </>
    )
}