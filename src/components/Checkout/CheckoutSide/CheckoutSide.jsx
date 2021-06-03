import React from 'react';
import img from '../../../logo/instagram_profile_image.png';

export default function CheckoutSide(props) {
    return(
        <div className='d-flex flex-column m-5'>
            <div class="mt-2 mb-5 row">
                <div class="col-3 position-relative">
                    <img src={img} class="w-75" alt={props.productsData.title} />
                    <span class="position-absolute top-0 start-60 translate-middle badge bg-secondary rounded-pill">4</span>
                </div>
                <div class="col-6">
                        <h5 class="title">Luna Naya</h5><p class="text"><small class="text-muted">Pebbled Ivory / 35</small></p>
                </div>
                <p class="text col-3">$235.00</p>
                <hr />
                <div className="row mt-3 mb-4">
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputCity" placeholder="Gift card or discount code" />
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-secondary">Apply</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2">Subtotal</div>
                    <div className="col"></div>
                    <div className="col-4">$470.00</div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">Shipping</div>
                    <div className="col"></div>
                    <div className="col-4">$54.66</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col"></div>
                    <div className="col-4"><h2><span className="fs-6 me-3">CAD</span>$470.00</h2></div>
                </div>
            </div>
        </div>
    )
}