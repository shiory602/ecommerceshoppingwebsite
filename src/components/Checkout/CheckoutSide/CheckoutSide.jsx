import React, { useState, useEffect } from 'react';

export default function CheckoutSide(props) {
    const [subTotal,setSubTotal] = useState([]);
    let shipping = 10;
    useEffect(()=>{
        let newTotal =[];
        props.products.map(product => 
            newTotal[product.id] = product.quantity*product.price
        )
        setSubTotal(parseFloat(newTotal.reduce((a, b) => a + b,0).toFixed(2)));
    },[props])
    return(
        <div className='d-flex flex-column m-5'>
            <div className="mt-2 mb-5 row">
                {props.products.map(product =>
                // <>
                <div className="d-flex mb-4"
                    key={product.id}
                >
                    <div className="col-3 position-relative">
                        <img src={product.image} className="w-75" alt={product.title} />
                        <span className="position-absolute top-0 start-60 translate-middle badge bg-secondary rounded-pill">{product.quantity}</span>
                    </div>
                    <div className="col-6">
                            <h5 className="title">{product.title}</h5><p className="text"><small className="text-muted">{product.color.charAt(0).toUpperCase() + product.color.slice(1)} / {product.size}</small></p>
                    </div>
                    <p className="text col-3">${ product.quantity*product.price}</p>
                </div>
                // </>
                )}
                <hr />
                <div className="row mt-3 mb-4">
                    <div className="col-8">
                        <input type="text" className="form-control" id="inputCity" placeholder="Gift card or discount code" />
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-secondary">Apply</button>
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