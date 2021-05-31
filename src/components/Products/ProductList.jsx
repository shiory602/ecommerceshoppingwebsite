import React from 'react'
import ProductSidebar from './ProductSidebar'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <ProductSidebar
                        categories={props.categories}
                    />
                </div>

                <div className="col">
                    <div className="row">
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
    )
}

export default ProductList