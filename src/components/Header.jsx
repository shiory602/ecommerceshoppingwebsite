import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";


export default function Header () {
    return (
        <>
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item row">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/product">Product</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={logo} width="100px" alt="logo" />
                </a>
            </li>
            <li className="nav-item row">
            <a className="nav-link active col" aria-current="page" href="#">
                    <span className="mx-3 p-2">LogIn</span>
                </a>
                <a className="nav-link active col" aria-current="page" href="#">
                <span className="mx-3 p-2">Cart</span>
                </a>
            </li>
        </ul>
        </>
    )
}