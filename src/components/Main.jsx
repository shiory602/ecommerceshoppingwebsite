import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Top from './Top/Top';
import Products from './Products/Products';
import PageNotFound from './PageNotFound/PageNotFound';
import ProductDetails from './Products/ProductDetails/ProductDetails'

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let dataProducts = data.filter(product => product.category != 'electronics');
        const catProducts = new Set();

        dataProducts.map((product, index) => {
          let url = product.title.trim().toLowerCase().replace(/'/g, '').replace(/,/g, '').replace(/\./g, '').replace(/&/g, '-').replace(/ /g, '-').replace(/---/g, '-');
          let catId = product.category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-');
          const catObj = {id: catId, name: product.category};

          // Product URL
          product.url = url;

          catProducts.add(product.category);
        });

        setCategories([...catProducts].sort());
        setProducts(dataProducts);
        setLoading(false);
    });
  }, []);

  return (
    <>
    {loading ? <p>loading</p> : 
      <>
        <Header categories={categories} />
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          
          <Route exact path='/'>
            <Top productsData={products} />
          </Route>
          {/* <Route exact path='/productDetails'>
            <ProductDetails data={products} />
          </Route> */}
          <Route exact path='/shop'>
            <Products categories={categories} productsData={products} />
          </Route>
          <Route exact path='/shop/:categoryId'>
            <Products categories={categories} productsData={products} />
          </Route>
          <Route exact path='/shop/:categoryId/:productUrl'>
            <Products categories={categories} productsData={products} />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </>
    }
    </>
  );
}

export default Main;