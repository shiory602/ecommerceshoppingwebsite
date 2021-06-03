import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './Cart.css'

export default function Cart(props) {
    const [total,setTotal] = useState([]);
    const [total2,setTotal2] = useState([]);
    useEffect(()=>{
        let newTotal =[];
        props.products.map(product => 
            newTotal[product.id] = parseInt(document.getElementById('quantity'+product.id).value)*product.price
        )
        setTotal(newTotal);
        setTotal2(newTotal.reduce((a, b) => a + b,0));
    },[])
    $('.modal-backdrop').remove();
    const counter = (y,id) => {
        let newArr = props.products.find(x => x.id == id)
        if (y == '+') {
            document.getElementById('quantity'+id).value ++
        }else{
            if (document.getElementById('quantity'+id).value > 1) {
               document.getElementById('quantity'+id).value -- 
            }
        }
        let newTotal = total;
        newTotal[id] = parseInt(document.getElementById('quantity'+id).value)*newArr.price
        setTotal(newTotal);
        setTotal2(newTotal.reduce((a, b) => a + b, 0));
    }
    return (
        <div className="cart">
            {props.products.map(product => 
                <div className='product' id={product.id}>
                    <img src={product.image} alt="photo" />
                    <div className='details'>
                        <h5>{product.title}</h5>
                        <p>Price: ${product.price}</p>
                        <p>Color: {product.color}</p>
                        <p>Size: {product.size}</p>
                    </div>
                    <div className='counter'>
                        <button onClick={()=>counter('-',product.id)}>-</button><input id={'quantity'+product.id} defaultValue={product.quantity}></input><button onClick={()=>counter('+',product.id)}>+</button>
                    </div>
                    <p className='price'>${total[product.id]}</p>
                </div>
                )}
            <h3>Subtotal: {total2}</h3>
        </div>
        
    )
}