import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutShipping(props) {
    return(
        <div className='d-flex flex-column m-5'>
            <h2>CGS</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link className="text-reset" role="button" aria-expanded="false">Cart</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        <Link className="text-reset" role="button" aria-expanded="false">Information</Link>
                    </li>
                    <li class="breadcrumb-item active disabled" aria-current="page">
                        <Link className="text-reset" role="button" aria-expanded="false">Shipping</Link>
                    </li>
                    <li class="breadcrumb-item active disabled" aria-current="page">
                        <Link className="text-reset" role="button" aria-expanded="false">Payment</Link>
                    </li>
                </ol>
            </nav>
            <div className="text-center">
            <div className="border">
                <div className="row m-3">
                    <div className="col-2">Contact</div>
                    <div className="col">shiori@gmail.com</div>
                    <div className="col-2">Change</div>
                </div>
                <hr />
                <div className="row m-3">
                    <div className="col-2">Ship to</div>
                    <div className="col">shiori, address</div>
                    <div className="col-2">Change</div>
                </div>
            </div>
            
            </div>
            
            

            <form class="row g-3">

            <h5 className='mt-3'>Delivery method</h5>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Ship
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    Canada Flat Rate
                </label>
            </div>
            
            
            <div class="col-12">
                <button type="submit" onClick={() => props.handleClick('Shipping')} class="btn btn-primary btn-lg m-1">Continue to shipping</button>
                <button type="submit" class="btn btn-light btn-lg m-1">Return to cart</button>
            </div>
            </form>
        </div>
    )
}