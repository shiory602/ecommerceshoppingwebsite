import React, { useState, useEffect } from 'react';
import './Product.css';
import BagModal from '../BagModal/BagModal'

export default function Product(props) {
    const [state, setState] = useState(props.prodData[0])
    // const [id, setID] = useState(props.data.id)
    return(
        <>
        {console.log(state)}
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
                    <div>Rating</div>
                    <div className='color'>
                        <p>Color</p>
                        <button style={{'background-color':'red'}}>  </button>
                        <button style={{'background-color':'green'}}>  </button>  
                    </div>
                    <div className='size'>
                        <h3>Size</h3>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>8</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>9</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>10</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>11</p>
                    </div>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add to Cart</button>
                    <button>Buy now</button>
                </div>
            </div>
            <div className='row'>
                <div className='col Description'>
                    <h2>Description</h2>
                    <p>{state.description}</p>
                </div>
            </div>
        </div>
        <BagModal data = {state} />
        </>
    )
}