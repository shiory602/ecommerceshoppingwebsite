import React, { useState, useEffect } from 'react';
import "./Top.css";
import banner from "./banner.jpg";
import dress from "./dress.jpg";
import shoes from "./shoes.jpg";
import bag from "./bag.jpg";

export default function Top() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);
    return(
    <>
    <div className="container">
        <div className="row">
        </div>
        <div className="row mt-3">
            {/* -------------- Carousel: START -------------- */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    {products.length > 0 ? <a href="/"><img src={products[5].image} className="d-block w-100" alt="banner" /></a> : <p>Loading Image...</p>}
                    </div>
                    <div className="carousel-item">
                    {products.length > 0 ? <a href="/"><img src={products[7].image} className="d-block w-100" alt="banner" /></a> : <p>Loading Image...</p>}
                    </div>
                    <div className="carousel-item">
                    {products.length > 0 ? <a href="/"><img src={products[5].image} className="d-block w-100" alt="banner" /></a> : <p>Loading Image...</p>}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* -------------- Carousel: START -------------- */}
        </div>
        <div className="row">
            <h2 className="m-4 d-flex justify-content-between">Categories</h2>
            <div className="col hover">
                {products.length > 0 ? 
                <a href="/">
                    <div className="hover-img"><img src={products[19].image} className="img-fluid" alt="banner" /></div>
                    <div className="hover-text hidden"><p className="text h2">Women's Clothes</p></div>
                </a> :
                <p>Loading Image...</p>}
            </div>
            <div className="col hover">
                {products.length > 0 ?
                <a href="/">
                    <div className="hover-img"><img src={products[2].image} className="img-fluid" alt="banner" /></div>
                    <div className="hover-text hidden"><p className="text h2">Men's Clothes</p></div>
                </a> :
                <p>Loading Image...</p>}
            </div>
            <div className="col hover">
                {products.length > 0 ?
                <a href="/">
                    <div className="hover-img"><img src={products[6].image} className="img-fluid" alt="banner" /></div>
                    <div className="hover-text hidden"><p className="text h2">Jewelries</p></div>
                </a> :
                <p>Loading Image...</p>}
            </div>
        </div>
        <div className="row">
            <h2 className="m-4 d-flex justify-content-between">Feature</h2>
            {products.length > 0 ? <img src={products[19].image} className="img-fluid" alt="banner" /> : <p>Loading Image...</p>}
        </div>
    </div>
    </>
    )
} 