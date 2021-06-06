import React, { useState, useEffect } from 'react';
import logo from "../logo/logo.png";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop/ScrollToTop';

import Header from './Header';
import Footer from './Footer';

import Top from './Top/Top';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import PageNotFound from './PageNotFound/PageNotFound';

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [numItems,setNumItems] = useState();

  const handleCart = (data) => {
    let newCart = cart;
    const check = (element) => (element.id === data.id);

    if (!cart.some(check)) {
      newCart.push(data);
      setCart(newCart);
    }
  }

  const handleDelete = (id) => {
    let currCart = cart;
    let newCart = currCart.filter(product => product.id !== id);

    setCart(newCart);
  }

  const handleNumItems = (num) => {
    setNumItems(num);
  }

  useEffect(() => {
    setLoading(true);

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        let dataProducts = data.filter(product => product.category !== 'electronics');
        const catProducts = new Set();

        dataProducts.map((product, index) => {
          let url = product.title.trim().toLowerCase().replace(/'/g, '').replace(/,/g, '').replace(/\./g, '').replace(/&/g, '-').replace(/ /g, '-').replace(/---/g, '-');

          // Product URL
          product.url = url;

          return catProducts.add(product.category);
        });

        setCategories([...catProducts].sort());
        setProducts(dataProducts);
        setLoading(false);
    });
  }, []);

  return (
    <>
    {loading
    ?
      <div className="loading">
        <img src={logo} alt="logo" />
      </div>
    :
      <BrowserRouter>
        <ScrollToTop />

        <Header categories={categories} cart={cart} numItems={numItems} />

        <Switch> {/* The Switch decides which component to show based on the current URL. */}
          <Route exact path='/'>
            <Top categories={categories} productsData={products} />
          </Route>

          <Route exact path='/shop'>
            <Products categories={categories} productsData={products} />
          </Route>

          <Route exact path='/shop/:categoryId'>
            <Products categories={categories} productsData={products} />
          </Route>

          <Route exact path='/shop/:categoryId/:productUrl'>
            <Products categories={categories} productsData={products} cart={handleCart}/>
          </Route>

          <Route exact path='/cart'>
            <Cart products={cart} deleteProduct={handleDelete} handleNumItems={handleNumItems}/>
          </Route>

          <Route exact path='/checkout' component={Checkout}/>

          <Route>
            <PageNotFound categories={categories} />
          </Route>
        </Switch>

        <Footer categories={categories} />
      </BrowserRouter>
    }
    </>
  );
}

export default Main;