import React from 'react'
import { Link } from 'react-router-dom'

import './PageNotFound.scss'

const PageNotFound = (props) => {
    return (
        <section className="page-not-found-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                        <p>Continue shopping using one of the following links:</p>
                        <ul>
                            {props.categories.map(category => {
                                const catId = category.trim().toLowerCase().replace(/'/g, '').replace(/ /g, '-')

                                return <li key={catId}><Link to={`/shop/${catId}/`}>{category}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound