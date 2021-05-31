import React from 'react'

import '../Product/Product.css'

export default function Product(props) {
    return (
        <div className='Product container'>
            <div className='row'>
                <div className='col productImg'>
                    <img src={props.prodData[0].image} alt={props.prodData[0].title} height='300px' width='400px' />
                    <div className='smallImgs'>
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                    </div>
                </div>
                <div className='col'>
                    <h1>{props.prodData[0].title}</h1>
                    <p>{props.prodData[0].price}</p>
                    <div>Rating</div>
                    <div className='color'>
                        <p>Color</p>
                        <button style={{'backgroundColor':'red'}}>  </button>
                        <button style={{'backgroundColor':'green'}}>  </button>  
                    </div>
                    <div className='size'>
                        <h3>Size</h3>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>8</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>9</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>10</p>
                        <p style={{'border':'1px solid black','padding':'5px','width':'40px'}}>11</p>
                    </div>
                    <button>Add to Cart</button>
                    <button>Buy now</button>
                </div>
            </div>
            <div className='row'>
                <div className='col Description'>
                    <h2>Description</h2>
                    <p>{props.prodData[0].description}</p>
                </div>
            </div>
        </div>
    )
}