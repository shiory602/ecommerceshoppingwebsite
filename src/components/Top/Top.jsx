import React, { useState, useEffect } from 'react';
import "./Top.css";
import { Link } from 'react-router-dom';

export default function Top(props) {
    const [future, setFuture] = useState([]);

    useEffect(() => {
        let array = [];
        for(let i = 0; i < 7; i++) {
            array.push(props.productsData[i]);
        }
        setFuture(array);
    }, [])

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
                    <a href="/"><img src={props.productsData[5].image} className="d-block w-100" alt={props.productsData[5].title} /></a>
                    </div>
                    <div className="carousel-item">
                    <a href="/"><img src={props.productsData[7].image} className="d-block w-100" alt={props.productsData[7].title} /></a>
                    </div>
                    <div className="carousel-item">
                    <a href="/"><img src={props.productsData[5].image} className="d-block w-100" alt={props.productsData[5].title} /></a>
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
            {/* -------------- Carousel: END -------------- */}
        </div>
        <div className="row m-4">
            {/* -------------- Categories: START -------------- */}
            <h1 className="m-4 p-3 d-flex justify-content-between">Categories</h1>
            <div className="col hover"> 
                <a href="/">
                <div className="hover-img"><img src={props.productsData[12].image} className="img-fluid" alt={props.productsData[12].title} /></div>
                    <div className="hover-text hidden"><p className="text h3">Women's Clothes</p></div>
                </a>
            </div>
            <div className="col hover">
                <a href="/">
                    <div className="hover-img"><img src={props.productsData[2].image} className="img-fluid" alt={props.productsData[2].title} /></div>
                    <div className="hover-text hidden"><p className="text h3">Men's Clothes</p></div>
                </a>
            </div>
            <div className="col hover">
                <a href="/">
                    <div className="hover-img"><img src={props.productsData[6].image} className="img-fluid" alt={props.productsData[6].title} /></div>
                    <div className="hover-text hidden"><p className="text h3">Jewelries</p></div>
                </a>
            </div>
            {/* -------------- Carousel: END -------------- */}
        </div>
        <div className="row m-4 p-3">
            {/* -------------- Futures: START -------------- */}
            <h1 className="m-4 d-flex flex-wrap">Feature</h1>
            {/* {props.productsData.map(product => */}
            {future.map(product =>
                <div className="col future-hover">
                    <Link to={`/shop/${product.id}/${product.url}`}>
                        <div className="future-img"><img src={product.image} alt={product.title} /></div>
                        <div className="future-text hidden"><p className="text1 h3">{product.title}</p></div>
                    </Link>
                </div>
            )}
            <Link to={`/shop`} className="btn">Shop all &gt;</Link>
            {/* -------------- Futures: END -------------- */}
        </div>
    </div>
    </>
    )
} 