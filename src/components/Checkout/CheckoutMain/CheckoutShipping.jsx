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
            
            <div className="row">
                <div className="col"></div>
                <div class="col-6 d-flex justify-content-center border-start border-end border-bottom pb-2">
                    <button type="button" class="btn btn-primary m-1">Shop Pay</button>
                    <button type="button" class="btn btn-dark m-1">Google Pay</button>
                    <button type="button" class="btn btn-warning m-1">Pay pal</button>
                </div>
                <div className="col"></div>
            </div>
            </div>
            
            <div className="row mb-5">
                <div className="border-bottom col-5 mb-2"></div>
                <span className="col mt-3 text-center">OR</span>
                <div className="border-bottom col-5 mb-2"></div>
            </div>
            

            <form class="row g-3">
            <div class="col-12">
                <label for="inputEmail4" class="form-label row">
                    <h5 className='col-md-6'>Contact information</h5>
                    <p className='col-md-6'>Already have an account?<a href="#" className="m-3">Log in</a></p>
                </label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                    Keep me up to date on news and exclusive offers
                </label>
                </div>
            </div>
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
                    Pick up
                </label>
            </div>
            <h5 className='mt-3'>Shipping address</h5>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputAddress" placeholder="Company (optional)" />
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, etc. (optional)" />
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputCity" placeholder="City" />
            </div>
            <div class="col-md-4">
                <select id="inputCountry" class="form-select">
                <option selected>Canada</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-4">
                <select id="inputProvince" class="form-select">
                <option selected>British Columbia</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" id="inputZip" placeholder="Postal code" />
            </div>
            <div class="col-12">
                <input type="text" class="form-control" id="inputCity" placeholder="Phone (optional)" />
            </div>
            <div class="col-12">
                <button type="submit" onClick={() => props.handleClick('Shipping')} class="btn btn-primary btn-lg m-1">Continue to shipping</button>
                <button type="submit" class="btn btn-light btn-lg m-1">Return to cart</button>
            </div>
            </form>
        </div>
    )
}