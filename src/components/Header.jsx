import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";


export default function Header (props) {
    return (
        <>
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item row align-items-center">
                <a className="nav-link active col" aria-current="page" href="#">
                    <span className="mx-3">Dress</span>
                </a>
                <a className="nav-link active col" aria-current="page" href="#">
                    <span className="mx-3">Shoes</span>
                </a>
                <a className="nav-link active col" aria-current="page" href="#">
                <span className="mx-3">Accessories</span>
                </a>
            </li>
            <li className="nav-item row">
                <Link to={{pathname: "/"}}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to={{pathname: "/product", state: props.data}}>Product</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={logo} width="100px" alt="logo" />
                </a>
            </li>
            <li className="nav-item row align-items-center">
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