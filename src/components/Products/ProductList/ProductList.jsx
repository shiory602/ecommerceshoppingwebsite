import React from 'react'
import ProductSidebar from '../ProductSidebar/ProductSidebar'
import ProductCard from '../ProductCard/ProductCard'

import './ProductList.css'

const ProductList = (props) => {
    return (
        <section className="product-list-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 product-category">
                        <ProductSidebar
                            categories={props.categories}
                        />
                    </div>

                    <div className="col">
                        <div className="row gy-4">
                            <h1>{props.categoryId != undefined ? props.prodData[0].category : 'All products'}</h1>
                            {props.prodData.map(product =>
                                <ProductCard
                                    key={product.id}
                                    categoryId={props.categoryId}
                                    productsData={product}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList