import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductDetails from './ProductDetails'
import ProductList from './ProductList'

import './Products.css'

const Products = (props) => {
    const [page, setPage] = useState('')
    const [productsData, setProductsData] = useState(props.productsData)

    const { categoryId, productUrl } = useParams()

    useEffect(() => {
        let prodData = []

        if (productUrl != undefined) {
            prodData = props.productsData.filter(product => product.url === productUrl)

            setPage('ProductDetails')
        }
        else {
            if (categoryId != undefined)
                prodData = props.productsData.filter(product => product.category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-') === categoryId)

            setPage('')
        }

        if (prodData.length > 0) setProductsData(prodData)
    }, [categoryId, productUrl])

    return (
        (page === 'ProductDetails')
        ?
            <ProductDetails prodData={productsData} />
        :
            <ProductList categories={props.categories} categoryId={categoryId} prodData={productsData} />
    )
}

export default Products