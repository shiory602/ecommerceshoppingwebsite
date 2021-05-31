import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";


export default function Header (props) {
    return (
        <header>
            <ul className="nav d-flex justify-content-between">
                {props.categories.map(category => {
                    const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')

                    return <li key={catId}><Link to={`/shop/${catId}/`}>{category}</Link></li>
                })}
                <li className="nav-item row">
                    <Link to={{pathname: "/"}}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={{pathname: "/productDetails"}}>Product</Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <img src={logo} width="100px" alt="logo" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">
                        <span className="mx-3 p-2">Log In</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <span className="mx-3 p-2">Cart</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}