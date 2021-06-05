import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutMain from './CheckoutMain/CheckoutMain';
import CheckoutSide from './CheckoutSide/CheckoutSide';
import './Checkout.css';

export default function Checkout(props) {
    return(
        <div className='d-flex justify-content-center'>
            <CheckoutMain products={props.location.products}/>
            <CheckoutSide products={props.location.products} />
        </div>
    )
}