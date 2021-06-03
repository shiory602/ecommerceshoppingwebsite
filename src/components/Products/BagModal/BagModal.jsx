import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BagModal.css';

export default function BagModal(props) {
    const [quantity, setQuantity] = useState(1);
    const counter = (y) => {
        if (y == '+') {
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
    {console.log(props.data)}
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    {typeof props.color !== 'string' || typeof props.size !== 'number'? 
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body content">
                <h4>Select Color and Size</h4>
            </div>
                <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    :
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add product to the Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body content">
                    <img src={props.data.image} alt="photo" width='15%' />
                    <h5>{props.data.title}</h5>
                    <p>Price: ${props.data.price}</p>
                    <div>
                        <p>Color: {props.color}</p>
                        <p>Size: {props.size}</p>
                    </div>
                    <button onClick={()=>counter('-')}>-</button><input id='quantity' defaultValue={1}></input><button onClick={()=>counter('+')}>+</button>
                </div>
                <div class="modal-footer">
                    <p>Total: {props.data.price*quantity}</p>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <Link to='/cart'>
                        <button type="button" className="btn btn-primary" onClick={() => props.cart(document.getElementById('quantity').value)}>Add to the Cart</button>
                    </Link>
                </div>
            </div>
        </div>}
    </div> 
    </> 
    )  
}
