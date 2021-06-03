import React, { useState, useEffect } from 'react';
import img from '../../../logo/instagram_profile_image.png';

export default function CheckoutSide(props) {
    const [subTotal,setSubTotal] = useState([]);
    const [shipping,setShipping] = useState(10);
    useEffect(()=>{
        let newTotal =[];
        props.products.map(product => 
            newTotal[product.id] = product.quantity*product.price
        )
        setSubTotal(newTotal.reduce((a, b) => a + b,0));
    },[])
    return(
        <div className='d-flex flex-column m-5'>
            <div class="mt-2 mb-5 row">
                {props.products.map(product =>
                <>
                    <div class="col-3 position-relative">
                        <img src={product.image} class="w-75" alt={product.title} />
                        <span class="position-absolute top-0 start-60 translate-middle badge bg-secondary rounded-pill">{product.quantity}</span>
                    </div>
                    <div class="col-6">
                            <h5 class="title">{product.title}</h5><p class="text"><small class="text-muted">{product.color.charAt(0).toUpperCase() + product.color.slice(1)} / {product.size}</small></p>
                    </div>
                    <p class="text col-3">${product.price}</p>
                </>
                )}
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
                    <div className="col-4">${subTotal}</div>
                </div>
                <div className="row mb-3">
                    <div className="col-2">Shipping</div>
                    <div className="col"></div>
                    <div className="col-4">${shipping}</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col"></div>
                    <div className="col-4"><h2><span className="fs-6 me-3">CAD</span>${shipping + subTotal}</h2></div>
                </div>
            </div>
        </div>
    )
}