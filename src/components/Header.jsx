import React , { useState, useEffect } from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

export default function Header (props) {
    const [numItems,setNumItems] = useState(props.numItems);
    useEffect(()=>{
        setNumItems(props.numItems)
    },[])
    return (
        <div className="row text-center">
            <ul className="col-3 navbar-nav me-auto my-2 my-lg-0 d-flex flex-row justify-content-around">
                <li className="nav-item pt-4">
                    <Link to={'/shop'} className="nav-link active text-reset">
                        <span className="mx-3 p-2">Shop All</span>
                    </Link>
                </li>
                <li className="nav-item mt-4 dropdown">
                    <Link className="nav-link dropdown-toggle text-reset" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop Collections
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        {props.categories.map(category => {
                            const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')
                            return <li key={catId}><Link to={`/shop/${catId}/`} className="text-reset text-secondary" >{category}</Link></li>
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
                        Cart<span className="px-1">( {!props.numItems ? 0 : props.numItems} )</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}