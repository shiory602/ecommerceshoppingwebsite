import React from 'react'
import { Link } from 'react-router-dom'

const ProductSidebar = (props) => {
    return (
        <>
            <h2>Categories</h2>
            <ul>
                {props.categories.map(category => {
                    const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')

                    return <li key={catId}><Link to={`/shop/${catId}/`}>{category}</Link></li>
                })}
            </ul>
        </>
    )
}

export default ProductSidebar