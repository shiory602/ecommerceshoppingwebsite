import React from 'react';
import { Link } from 'react-router-dom';
import thanks from "../../../images/thankyou.jpeg";

export default function CheckoutPay() {
    return (
        <div className='d-flex flex-column m-5'>
            <h2>CGS</h2>
            <div className="card text-center">
                <img src={thanks} className="card-img-top" alt="thank you" />
                <div className="card-body">
                    <h5 className="card-title">Your order is completed!</h5>
                    <p className="card-text">You will be receiving a confirmation email with order details.</p>
                    <Link to="/shop" className="btn btn-primary">Explore more clothes</Link>
                </div>
            </div>
        </div>
    )
}