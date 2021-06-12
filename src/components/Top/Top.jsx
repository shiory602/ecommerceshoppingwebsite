import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Top.css";

export default function Top(props) {
    // array for future products gallery
    const [future, setFuture] = useState([]);

    useEffect(() => {
        let array = [];

        for(let i = 0; i < 8; i++) {
            const randomIdx = Math.floor(Math.random() * array.length);
            array.splice(randomIdx, 0, props.productsData[i]);
        }

        setFuture(array);
    }, [props]);

    return (
        <>
            <section className="banner-section home-section">
                <div className="container-fluid px-0">
                    {/* -------------- Carousel: START -------------- */}
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            {props.categories.map((category, index) => {
                                const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-');

                                return (
                                    <div
                                        key={catId}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img src={require(`../../images/img-category-${catId}-medium.jpg`).default} className="d-block w-100" alt={category} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <Link to={`/shop/${catId}`} className="btn btn-light btn-lg fw-bold float-end">
                                                Shop {category} <FaLongArrowAltRight />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* -------------- Carousel: END -------------- */}
                </div>
            </section>
            {/* ---------------------------------- Category Section: START ---------------------------------- */}
            <section className="categories-section home-section">
                <div className="container">
                    <div className="row">
                        <h1 className="mb-4 text-center">Shop by Category</h1>
                        <div className="col text-center">
                            <Link to="shop/womens-clothing">
                                <div className="categories-img mb-4" style={{backgroundImage: `url(${props.productsData[12].image})`}}></div>
                                <p className="text h3">Women's Clothing</p>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="shop/mens-clothing">
                                <div className="categories-img mb-4" style={{backgroundImage: `url(${props.productsData[2].image})`}}></div>
                                <p className="text h3">Men's Clothing</p>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <Link to="shop/jewelery">
                                <div className="categories-img mb-4" style={{backgroundImage: `url(${props.productsData[6].image})`}}></div>
                                <p className="text h3">Jewelery</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------- Category Section: END ---------------------------------- */}
            {/* ---------------------------------- Feature Products: START ---------------------------------- */}
            <section className="features-section home-section">
                <div className="container text-center">
                    <h1 className="mb-4 text-center">Featured Products</h1>
                    <div className="gallery-container mb-4">
                        {future.map(product => {
                            const catId = product.category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-'); 

                            return (
                                <div
                                    key={product.id}
                                    className="gallery-item"
                                >
                                    <Link to={`/shop/${catId}/${product.url}`}>
                                        <div className="gallery-img">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div className="gallery-text">
                                            <p className="text1 h3">{product.title}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

                    <Link to={`/shop`} className="btn btn-primary btn-lg fw-bold">Shop All <FaLongArrowAltRight /></Link>
                </div>
            </section>
        </>
    )
} 