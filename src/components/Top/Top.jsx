import React, { useState, useEffect } from 'react';
import "./Top.css";
import $ from "jquery";

export default function Top(props) {
    const [products, setProducts] = useState([]);
    const [galleryImages, setGalleryImages] = useState();
    const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    //         .then(setLoading(false))
    //     /*--------------------
    //     gallery
    //     ----------------------*/
    //     // showGallery();
    //     // for(let i = 0; i > 20; i++) {
    //     //     list.push(<img src={products[i].image} className="img-fluid" alt="banner" />);
    //     // }
    // }, []);
    console.log(products);
    
    // if (loading == false) {
    //     document.querySelector("#gallery").forEach(() => {
    //         // #gallery element will be a container of gallery
    //         let container = this;

    //         // Setting options and prepare Masonry
    //         container.masonry({
    //             columnWidth: 230,
    //             gutter: 10,
    //             itemSelector: '.gallery-item'
    //         })
    //         let list = [];
    //         products.forEach(item => {
    //             setGalleryImages(
    //                 <li className="gallery-item is-loading">
    //                     <a href={item.image} alt={item.title}></a>
    //                 </li>
    //             )
    //         })
    //     });
    // }
    // showGallery();

    return(
    <>
    <div className="container">
        <div className="row">
        </div>
        <div className="row mt-3">
        {products.length > 0 ?
            <img src={products[0].image} alt="banner" width="100%" />:<p>Loading Image...</p>
        }
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
                {products.length > 0  ? 
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
            {products.length > 0  ? products.map(product => <img src={product.image}/>) : <p>Loading Image...</p>}
        </div>
    </div>
    </>
    )
} 