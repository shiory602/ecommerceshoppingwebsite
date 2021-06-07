import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import CheckoutInformation from './CheckoutMain/CheckoutInformation';
import CheckoutPay from './CheckoutMain/CheckoutPay';
import CheckoutSide from './CheckoutSide/CheckoutSide';

export default function Checkout(props) {
    const [check, setCheck] = useState('Information');
    const handleClick = (v) => {
        setCheck(v);
    }

    return (
        (props.location.products === undefined)
        ?
            <Redirect to='/cart' />
        :
            <div className='d-flex justify-content-center'>
                {check === 'Information'
                ?
                    <>
                        <CheckoutInformation handleClick={handleClick} />
                        <CheckoutSide products={props.location.products} />
                    </>
                :
                    <CheckoutPay handleClick={handleClick}/>
                }
            </div>
    )
}