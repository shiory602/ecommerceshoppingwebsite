import React, { useState, useEffect } from 'react';
import "./Top.css";
import Header from '../Header';
import Footer from '../Footer';
import banner from "./banner.jpg";
import dress from "./dress.jpg";
import shoes from "./shoes.jpg";
import bag from "./bag.jpg";

export default function Top() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data));
    // }, []);
    return(
    <>
    <div className="container">
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <img src={banner} alt="banner" width="100%" />
        </div>
        <div className="row">
            <h2>Categories</h2>
            <div className="col">
                <img src={dress} alt="dress" width="100%" />
            </div>
            <div className="col">
                <img src={shoes} alt="shoes" width="100%" />
            </div>
            <div className="col">
                <img src={bag} alt="bag" width="100%" />
            </div>
        </div>
        <div className="row">
            <h2>feature</h2>
            <img src={banner} alt="banner" width="100%" />
        </div>
        <div className="row">
            <Footer />
        </div>
    </div>
    </>
    )
} 