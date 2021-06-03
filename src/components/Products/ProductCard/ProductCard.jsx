import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="col-3">
            <Link to={`/shop/${props.categoryId}/${props.productsData.url}`}>
                <div className="product-card">
                    <div className="card-image" style={{backgroundImage: `url(${props.productsData.image})`}}></div>
                    <div className="card-body">
                        <h5 className="card-title">{props.productsData.title}</h5>
                        <p className="card-text">{props.productsData.price.toFixed(2)}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard