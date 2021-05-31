import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="product-card col-3">
            <Link to={`/shop/${props.categoryId}/${props.productsData.url}`}>
                <img src={props.productsData.image} alt={props.productsData.title} />
                {props.productsData.title}
            </Link>
        </div>
    )
}

export default ProductCard