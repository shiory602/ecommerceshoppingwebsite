import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BagModal.css';

export default function BagModal(props) {
    const [quantity, setQuantity] = useState(1);
    const counter = (y) => {
        if (y === '+') {
            document.getElementById('quantity').value ++
        }else{
            if (document.getElementById('quantity').value > 1) {
                document.getElementById('quantity').value -- 
            }
        }
        setQuantity(document.getElementById('quantity').value)
    }
    return (
    <>
    {/* {console.log(props.data)} */}
    <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    {typeof props.color !== 'string' || typeof props.size !== 'number'? 
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"> </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body content">
                <h4>Select Color and Size</h4>
            </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    :
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add product to Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body content">
                    <img src={props.data.image} alt={props.data.title} width='15%' />
                    <h5>{props.data.title}</h5>
                    <p>Price: ${props.data.price}</p>
                    <div>
                        <p>Color: {props.color}</p>
                        <p>Size: {props.size}</p>
                    </div>
                    <button onClick={()=>counter('-')}>-</button><input id='quantity' defaultValue={1}></input><button onClick={()=>counter('+')}>+</button>
                </div>
                <div className="modal-footer">
                    <p>Total: {props.data.price*quantity}</p>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link to='/cart'>
                        <button type="button" className="btn btn-primary" onClick={() => props.cart(document.getElementById('quantity').value)}>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>}
    </div> 
    </> 
    )  
}
