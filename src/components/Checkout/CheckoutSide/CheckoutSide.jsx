import React from 'react';
import img from '../../../logo/instagram_profile_image.png';

export default function CheckoutSide(props) {
    return(
        <div className='d-flex flex-column ms-3'>
            <div class="mb-3 row">
                <img src={img} class="img-top col-3" alt="{props.productsData.title}" />
                <div class="col-6">
                        <h5 class="title">Luna Naya</h5><p class="text"><small class="text-muted">Pebbled Ivory / 35</small></p>
                </div>
                        <p class="text col-3">$235.00</p>
                <hr />
                <div className="row">
                    <div class="col-8">
                        <input type="text" class="form-control" id="inputCity" placeholder="City" />
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-secondary btn-lg m-3">Apply</button>
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
                    <div className="col-4">Calculated at next step</div>
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