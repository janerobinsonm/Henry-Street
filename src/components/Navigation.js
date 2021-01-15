/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { Link } from "react-router-dom"

export default (props) => {
    return (
        <ul className="navbar">
           
                <Link className="navbar__link" to="/">
                </Link>
                
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Shopping List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">EFAP Centers</Link>
            </li>


{
    localStorage.getItem("goodNFull_user")
        ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("goodNFull_user")
                    props.history.push("/")
                }}
            >Logout</Link>
        </li>
        : ""
}
        </ul>
    )
}
