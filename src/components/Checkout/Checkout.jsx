import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutMain from './CheckoutMain/CheckoutMain';
import CheckoutSide from './CheckoutSide/CheckoutSide';
import './Checkout.css';

export default function Checkout(props) {
    return(
        <div className='d-flex justify-content-center'>
            <CheckoutMain products={props.products}/>
            <CheckoutSide products={props.products} />
        </div>
    )
}