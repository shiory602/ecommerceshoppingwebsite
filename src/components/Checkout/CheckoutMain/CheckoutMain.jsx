import React from 'react';

export default function Checkout(props) {
    return(
        <div className='d-flex flex-column m-5'>
            <h2>CGS</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Cart</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Information</li>
                    <li class="breadcrumb-item active" aria-current="page">Shipping</li>
                    <li class="breadcrumb-item active" aria-current="page">Payment</li>
                </ol>
            </nav>
            <span>Express checkout</span>
            <div class="d-grid gap-2 d-md-block border-top-0">
                <button type="button" class="btn btn-primary">Shop Pay</button>
                <button type="button" class="btn btn-dark">Google Pay</button>
                <button type="button" class="btn btn-warning">Pay pal</button>
            </div>
            

            <span className="or-line">OR</span>

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
                <button type="submit" class="btn btn-primary btn-lg">Continue to shipping</button>
                <button type="submit" class="btn btn-light btn-lg">Return to cart</button>
            </div>
            </form>
        </div>
    )
}