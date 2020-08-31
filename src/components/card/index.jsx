import React, { useState } from "react"
const urlImages = "https://image.tmdb.org/t/p/w300/"

export default ({ movie })=>{
    const [ showDescription, toggleShowDescription ] = useState(false)

    const limitWrap = !showDescription?{
        height: "4.5em",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }:{}
    // alert(movie.poster_path)
    if(movie.poster_path == null) return null;
    return(
        <div 
            className="card" 
            style={{ minWidth: 300, margin: ".3rem", border: 0, borderRadius: 8, overflow: "hidden" }}
        >
            <div className="card-body" style={{ padding: 0 }}>
                <img src={ urlImages + movie.poster_path } width="100%" height="100%"/>

                {/* <h5 className="card-title">{ movie.title }</h5> */}

                {/* <div className="content-description">
                    <p className="card-text" style={limitWrap}>{ movie.overview }</p>
                    <a  onClick={ ()=> toggleShowDescription(!showDescription) }>
                        { !showDescription?"Mas":"Menos" }
                    </a>
                    <a href="/" className="btn btn-primary">Ver pelicula</a>
                </div> */}
            </div>
        </div>
    )
}