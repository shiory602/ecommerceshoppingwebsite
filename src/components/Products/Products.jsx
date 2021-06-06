import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductDetails from './ProductDetails/ProductDetails'
import ProductList from './ProductList/ProductList'

import PageNotFound from '../PageNotFound/PageNotFound';

const Products = (props) => {
    const [page, setPage] = useState('')
    const [productsData, setProductsData] = useState(props.productsData)

    const { categoryId, productUrl } = useParams()

    const handleCartChange = (data) => {
        props.cart(data)
    }

    useEffect(() => {
        let showPage = ''
        let prodData = []

        if (productUrl !== undefined) {
            prodData = props.productsData.filter(product => product.url === productUrl)

            showPage = 'ProductDetails'
        }
        else {
            if (categoryId !== undefined) {
                prodData = props.productsData.filter(product => product.category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-') === categoryId)

                showPage = 'ProductList'
            }
        }

        if (prodData.length === 0) {
            if (showPage === '')
                prodData = props.productsData
            else
                showPage = 'PageNotFound'
        }

        setProductsData(prodData)
        setPage(showPage)
    }, [props, page, categoryId, productUrl])

    return (
        (page === 'PageNotFound')
        ?
            <PageNotFound
                categories={props.categories}
            />            
        :
            (page === 'ProductDetails')
            ?
                <ProductDetails
                    prodData={productsData}
                    cartChange={handleCartChange}
                />
            :
                <ProductList
                    categories={props.categories}
                    categoryId={categoryId}
                    prodData={productsData}
                />
    )
}

export default Products