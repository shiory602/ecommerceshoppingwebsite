import React from "react"
import logo from "../logo/logo.png"
import { Link } from "react-router-dom"

import { IconContext } from "react-icons"
import { FaShoppingCart } from "react-icons/fa"

export default function Header (props) {

    return (
        <header>
            <div className="container-fluid">
                <div className="row text-center">
                    <ul className="col-3 navbar-nav d-flex flex-row align-items-center ms-2 ps-4 pe-0">
                        <li className="nav-item">
                            <Link to={'/shop'} className="nav-link active text-reset">
                                <span>Shop All</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown ms-4">
                            <Link to={'/'} className="nav-link dropdown-toggle text-reset" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop Collections
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                {props.categories.map(category => {
                                    const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')

                                    return (
                                        <li key={catId}>
                                            <Link to={`/shop/${catId}/`} className="text-reset text-secondary" >
                                                {category}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>

                    <Link to="/" className="col nav-link navbar-brand me-0">
                        <img src={logo} width="100px" alt="logo" />
                    </Link>

                    <ul className="col-3 navbar-nav d-flex flex-row justify-content-end align-items-center me-2 pe-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link disabled text-reset">
                                Log In
                            </Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link to="/cart" className="nav-link text-reset">
                                <IconContext.Provider value={{ style: {fontSize: '18px'}}}>
                                    <FaShoppingCart /> {!props.numItems ? '' : <span className="top-0 translate-middle badge bg-secondary rounded-pill">{props.numItems}</span>}
                                </IconContext.Provider>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
       </header>
    )
}