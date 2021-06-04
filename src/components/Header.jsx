import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

export default function Header (props) {
    return (
        <div className="row text-center" id="navbarScroll">
            <ul className="col-3 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex flex-row justify-content-around">
                <li class="nav-item pt-4">
                    <Link to={'/shop'} className="nav-link active text-reset">
                        <span className="mx-3 p-2">Shop All</span>
                    </Link>
                </li>
                <li class="nav-item mt-4 dropdown">
                    <Link class="nav-link dropdown-toggle text-reset" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop Collections
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        {props.categories.map(category => {
                            const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')
                            return <li key={catId}><Link to={`/shop/${catId}/`} className="text-reset fs-3 text-secondary" >{category}</Link></li>
                        })}
                    </ul>
                </li>
            </ul>
            <Link to="/" className="col nav-link navbar-brand">
                <img src={logo} width="100px" alt="logo" />
            </Link>
            <ul className="col-3 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex flex-row justify-content-around">
                <li className="nav-item pt-4">
                    <Link to="/login" className="nav-link disabled text-reset">
                        Log In
                    </Link>
                </li>
                <li className="nav-item pt-4">
                    <Link to="/cart" className="nav-link text-reset">
                        Cart<span className="px-1">( 1 )</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}