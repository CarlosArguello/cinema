import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./index.css"
import queryString from 'query-string'
import { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom";

export default ()=>{
    const
        [ search, setSearch ] = useState(""),
        [ loadPage, setLoadPage ] = useState(false),
        location = useLocation(),
        history = useHistory()


    useEffect(()=>{
        if(search.length){
            history.push("/movies/search?query=" + search)
        }else{
            if(!loadPage){
                const { query = "" } = queryString.parse(location.search)
                if(query.length) setSearch(query)
                setLoadPage(true)
            }
        }
    }, [ search ])

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style={{ boxShadow: "0 2px 12px #000"}}>
            <Link className="navbar-brand text-light" to="/">Cinema</Link>

            <div className="collapse navbar-collapse">

                <ul className="navbar-nav mr-auto">
                    <li>
                        <NavLink exact className="nav-link text-light" to="/" activeClassName="active">Home</NavLink>
                    </li>

                    <li>
                        <NavLink exact className="nav-link text-light" to="/populares" activeClassName="active">Populares</NavLink>
                    </li>

                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input 
                        type="search" 
                        className="form-control mr-sm-2" 
                        style={{ fontSize:   "15px", height: "35px" }}
                        onChange={ ({ target })=> setSearch(target.value)}
                        value={search}
                        placeholder="Buscar"
                    />
                </form>

            </div>
        </nav>
    )
}