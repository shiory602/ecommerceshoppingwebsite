import React, { useEffect } from 'react';
import "./Top.css";
import Header from '../Header';
import Footer from '../Footer';

export default function Top() {
    return(
    <>
    <div className="container">
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <h2>banner</h2>
        </div>
        <div className="row">
            <h2>main</h2>
            <div className="col">col</div>
            <div className="col">col</div>
            <div className="col">col</div>
        </div>
        <div className="row">
            <h1>feature</h1>
        </div>
        <div className="row">
            <Footer />
        </div>
    </div>
    </>
    )
} 