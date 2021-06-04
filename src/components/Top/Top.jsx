import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Top.css";

export default function Top(props) {
    const [future, setFuture] = useState([]);

    useEffect(() => {
        let array = [];
        for(let i = 0; i < 7; i++) {
            array.push(props.productsData[i]);
        }
        setFuture(array);
    }, [])

    return (
        <>
            <section className="banner-section">
                <div className="container-fluid px-0">
                    {/* -------------- Carousel: START -------------- */}
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {props.categories.map((category, index) => {
                                const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-');

                                return (
                                    <div
                                        key={catId}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img src={require(`../../images/img-category-${catId}.jpg`).default} className="d-block w-100" alt={category} />
                                        <div class="carousel-caption d-none d-md-block">
                                            <Link to={catId} className="btn btn-light">
                                                shop {category} <i class="bi bi-chevron-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
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
            </section>

            <section className="features-section">
                <div className="container">
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
                        {/* -------------- Categories: END -------------- */}
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="row m-4 p-3">
                        {/* -------------- Features: START -------------- */}
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
                        {/* -------------- Features: END -------------- */}
                    </div>
                </div>
            </section>
        </>
    )
} 