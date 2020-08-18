import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./index.css"

export default ()=>(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{ boxShadow: "0 2px 12px #000"}}>
        <Link className="navbar-brand text-light" to="/">Cinema</Link>

        <div className="collapse navbar-collapse">

            <ul className="navbar-nav mr-auto">
                <li>
                    <NavLink exact className="nav-link text-light" to="/" activeClassName="active">Home</NavLink>
                    {/* <a className="nav-link text-light" href="/">Inicio</a> */}
                </li>

                <li>
                    <NavLink exact className="nav-link text-light" to="/populares" activeClassName="active">Populares</NavLink>
                    {/* <a className="nav-link text-light" href="/populares">Populares</a> */}
                </li>

            </ul>

            <form className="form-inline my-2 my-lg-0">
                <input 
                    type="search" 
                    className="form-control mr-sm-2" 
                    style={{ fontSize:   "15px", height: "35px" }}
                    placeholder="Buscar"
                />
            </form>

        </div>
    </nav>
)