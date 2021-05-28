import React from 'react';
import './Product.css';

export default function Product() {
    return(
        <div className='Product container'>
            <div className='row'>
                <div className='col productImg'>
                    <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='300px' width='400px' />
                    <div className='smallImgs'>
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                        <img src="https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2019/06/249932773-0713_feat_native_shoes_2-w.jpg" alt="photo" height='70px' width='90px' />
                    </div>
                </div>
                <div className='col'>
                    <h1>Product 1</h1>
                    <p>$99.99</p>
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
                    <button>Add to Cart</button>
                    <button>Buy now</button>
                </div>
            </div>
            <div className='row'>
                <div className='col Description'>
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolore dolorem repellat assumenda debitis ducimus maxime quasi sed cumque velit magnam similique, libero ullam sunt. Similique incidunt natus consequuntur et!</p>
                </div>
            </div>
        </div>
    )
}