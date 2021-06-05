import React, { useState, useEffect } from 'react';
import './Product.css';
import BagModal from '../BagModal/BagModal'

export default function Product(props) {
    const [state, setState] = useState(props.prodData[0])
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const addToCart = (quantity) => {
        let data = state;
        data.quantity = quantity;
        data.size = size;
        data.color = color;
        props.cartChange(data);
    }
    const selectSize = (e,num) => {
        for (let i = 0;i<4;i++){
            document.getElementsByClassName('sizeNum')[i].style.backgroundColor='white';
            document.getElementsByClassName('sizeNum')[i].style.color='black';
        }
        e.target.style.backgroundColor='black'; 
        e.target.style.color='white';
        setSize(num);
        let data = state;
        data.size = size;
        setState(data);
    }
    const selectColor = (e,col) => {
        for (let i = 0;i<3;i++){
            document.getElementsByClassName('colorSel')[i].style.transform='scale(1)';
            document.getElementsByClassName('colorSel')[i].style.border='transparent';
        }
        e.target.style.transform='scale(1.1)'; 
        e.target.style.border='1px solid black'; 
        setColor(col);
        let data = state;
        data.color = color;
        setState(data);
    }
    return(
        <>
        <div className='Product container' key={state.id}>
            <div className='row'>
                <div className='col productImg'>
                    <img src={state.image} alt="photo" width='300px' />
                    <div className='smallImgs'>
                        <img src={state.image} alt="photo" width='70px' />
                        <img src={state.image} alt="photo" width='70px' />
                        <img src={state.image} alt="photo" width='70px' />
                        <img src={state.image} alt="photo" width='70px' />
                    </div>
                </div>
                <div className='col'>
                    <h1>{state.title}</h1>
                    <p>${state.price}</p>
                    <div className='color'>
                        <h5>Color</h5>
                        <button className='colorSel' onClick={(e)=> selectColor(e,'black')} style={{'background-color':'rgb(24, 21, 21)'}}></button>
                        <button className='colorSel' onClick={(e)=> selectColor(e,'blue')} style={{'background-color':'rgb(76, 55, 196)'}}></button>
                        <button className='colorSel' onClick={(e)=> selectColor(e,'white')} style={{'background-color':'rgb(235, 217, 217)'}}></button>  
                    </div>
                    <div className='size'>
                        <h5>Size</h5>
                        <p className='sizeNum' onClick={(e)=> selectSize(e,8)}>8</p>
                        <p className='sizeNum' onClick={(e)=> selectSize(e,9)}>9</p>
                        <p className='sizeNum' onClick={(e)=> selectSize(e,10)}>10</p>
                        <p className='sizeNum' onClick={(e)=> selectSize(e,11)}>11</p>
                    </div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add to Cart</button>
                </div>
            </div>
            <div className='row'>
                <div className='col Description'>
                    <h2>Description</h2>
                    <p>{state.description}</p>
                </div>
            </div>
        </div>
        <BagModal data={state} color={color} size={size} cart={addToCart} />
        </>
    )
}