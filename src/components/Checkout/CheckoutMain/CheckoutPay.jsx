import React from 'react';
import { Link } from 'react-router-dom';
import thanks from "../../../images/thankyou.jpeg";

export default function CheckoutPay(props) {
    return (
        <div className='d-flex flex-column m-5'>
            <h2>CGS</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item text-secondary">
                        <Link className="text-reset disabled" role="button" aria-expanded="false">Cart</Link>
                    </li>
                    <li class="breadcrumb-item disabled text-secondary">
                        <Link className="text-reset" role="button" aria-expanded="false">Information</Link>
                    </li>
                    <li class="breadcrumb-item disabled" aria-current="page">
                        <Link className="text-reset" role="button" aria-expanded="false">Payment</Link>
                    </li>
                </ol>
            </nav>

            <div class="card text-center">
                <img src={thanks} class="card-img-top" alt="thank you" />
                <div class="card-body">
                    <h5 class="card-title">Your order is completed!</h5>
                    <p class="card-text">You will be receiving a confirmation email with order details.</p>
                    <Link to="/shop" class="btn btn-primary">Explore more clothes</Link>
                </div>
            </div>
        </div>
    )
}