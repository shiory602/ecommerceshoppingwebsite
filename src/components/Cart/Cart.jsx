import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import './Cart.css';
import deleteIcon from '../../images/x-circle.svg'

export default function Cart(props) {
    const [total,setTotal] = useState([]);
    const [total2,setTotal2] = useState([]);
    const [data,setData] = useState(props.products);
    const [numItems,setNumItems] = useState();
    useEffect(()=>{
        $('.modal-backdrop').remove();
        console.log(data)
        let newTotal =[];
        data.map(product => 
            newTotal[product.id] = product.quantity*product.price
        )
        setTotal(newTotal);
        setTotal2(newTotal.reduce((a, b) => a + b,0).toFixed(2));
        let newNum = 0;
        for(let product of data) {
            newNum = newNum + parseInt(product.quantity);
        }
        setNumItems(newNum);
    },[data])

    const deleteProduct = id => {
        props.deleteProduct(id);
        let currProducts = data;
        let newProducts = currProducts.filter(product => product.id !== id);
        setData(newProducts);
    }
    const counter = (y,id) => {
        let prod = data.find(x => x.id == id)
        if (y == '+') {
            prod.quantity ++
        }else{
            if (prod.quantity > 1) {
                prod.quantity -- 
            }
        }
        document.getElementById('quantity'+ id).value = prod.quantity;
        let newTotal = total;
        newTotal[id] = (prod.quantity*prod.price)
        setTotal(newTotal);
        setTotal2(newTotal.reduce((a, b) => a + b, 0).toFixed(2));
        let newCart = data;
        for (let product of newCart) {
            if (product.id == id) {
                product.quantity = prod.quantity;
            }
        }
        setData(newCart);
        let newNum = 0;
        for(let product of data) {
            newNum = newNum + parseInt(product.quantity);
        }
        setNumItems(newNum);
        console.log(data)
    }
    return (
        <div className="cart">
            {data.map(product => 
                <div key={product.id} className='product' id={product.id}>
                    <img className='productImg' src={product.image} alt="photo" />
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
                    <img className='delete' src={deleteIcon} onClick={()=>deleteProduct(product.id)} />
                </div>
                )}
            <div className='summary'>
                <div>
                    <h1>Order Summary</h1>
                    <p>{numItems} Items: ${total2}</p>
                    <h3>Subtotal: {total2}</h3>
                </div>
                <Link to={{
                    pathname:"/checkout",
                    products: data
                 }}><button type="button" className="btn btn-secondary">Check Out</button>
                </Link>
            </div>
            
        </div>
        
    )
}