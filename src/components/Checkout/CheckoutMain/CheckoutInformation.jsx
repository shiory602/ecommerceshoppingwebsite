import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutInformation(props) {
    
    return (
        <>
            <div className='d-flex flex-column m-5'>
                <h2>CGS</h2>

                <div className="text-center">
                    <div className="row mb-1">
                        <div className="col"></div>
                        <div className="border-bottom col-1 mb-2"></div>
                        <span className="col mt-4 text-center">Express checkout</span>
                        <div className="border-bottom col-1 mb-2"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-6 d-flex justify-content-center border-start border-end border-bottom pb-2">
                            <button type="button" className="btn btn-primary m-1">Shop Pay</button>
                            <button type="button" className="btn btn-dark m-1">Google Pay</button>
                            <button type="button" className="btn btn-warning m-1">Pay pal</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                
                <div className="row mb-5">
                    <div className="border-bottom col-5 mb-2"></div>
                    <span className="col mt-3 text-center">OR</span>
                    <div className="border-bottom col-5 mb-2"></div>
                </div>

                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label row">
                            <h5 className='col-md-6'>Contact information</h5>
                            <p className='col-md-6'>Already have an account?<Link to='/checkout' className="m-3 disabled">Log in</Link></p>
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label htmlFor="gridCheck" className="form-check-label">
                            Keep me up to date on news and exclusive offers
                        </label>
                        </div>
                    </div>
                    <h5 className='mt-3'>Delivery method</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label htmlFor="flexRadioDefault1" className="form-check-label">
                            Ship
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label htmlFor="flexRadioDefault2" className="form-check-label">
                            Pick up
                        </label>
                    </div>
                    <h5 className='mt-3'>Shipping address</h5>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Company (optional)" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Apartment, studio, etc. (optional)" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="col-md-4">
                        <select id="inputCountry" className="form-select">
                        <option defaultValue>Canada</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select id="inputProvince" className="form-select">
                        <option defaultValue>British Columbia</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Postal code" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="Phone (optional)" />
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={() => props.handleClick('pay')} className="btn btn-primary btn-lg m-1">Pay now</button>
                        <Link to="/cart"><button type="submit" className="btn btn-light btn-lg m-1">Return to cart</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}