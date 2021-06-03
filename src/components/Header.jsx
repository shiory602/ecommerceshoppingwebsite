import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

export default function Header (props) {
    return (
        <header>
            <ul className="nav nav-tabs d-flex justify-content-between navbar-light bg-light fs-1 text-secondary">
                <li className="nav-item"><Link to={'/shop'} className="nav-link text-reset">Shop All</Link></li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-reset" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Shop Collections</Link>
                    <ul class="dropdown-menu">
                        {props.categories.map(category => {
                            const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')
                            return <li key={catId}><Link to={`/shop/${catId}/`} className="text-reset fs-3 text-secondary" >{category}</Link></li>
                        })}
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link navbar-brand text-reset">
                        <img src={logo} width="100px" alt="logo" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link disabled text-reset">
                        <span className="mx-3 p-2">Log In</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link text-reset">
                        <span className="mx-3 p-2">Cart</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/checkout" className="nav-link text-reset">
                        <span className="mx-3 p-2">Checkout</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}