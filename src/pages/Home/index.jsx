import React, { useState, useEffect } from 'react';
import Card from "../../components/card"
import "./index.css"
import axios from "axios"
import { Redirect, Link } from 'react-router-dom';



const getTopRatenMovie = async ({ api_key, language, page })=>{
    const urlData = "https://api.themoviedb.org/3",
          { status, statusText, data } = await  axios.get(urlData + "/movie/top_rated",  { 
              params: { api_key, language,  page }
          })

    if(status === 200 && statusText === "OK")
        return data
}

export default  ()=> {
    const 
        [ topRatenMovie, setTopRatenMovie ] = useState([]),  
        api_key = "9dffe1ad75dbf83ed2d555cbc14d7a57",
        [ language, setLanguage ] = useState("es"),
        [ page, setPage ] = useState(1)

    useEffect(()=>{
        getTopRatenMovie({ api_key, language, page }).then(dataTopRatenMovie => {
            // console.log("data: ", dataTopRatenMovie)
            if(!topRatenMovie.length) 
                return setTopRatenMovie(dataTopRatenMovie.results)

            setTopRatenMovie(
                topRatenMovie.concat(dataTopRatenMovie.results)
            )
        })
    }, [ page ])
    
    document.body.onscroll = ()=>{
        if(window.scrollY >= window.scrollMaxY)
            setPage(page+1)
    }

    return topRatenMovie.map( (popularMovie, index) =>(
        <Link to={`/movies/${ popularMovie.id }`}>
            <Card movie={ popularMovie } key={ index }></Card>
        </Link>
    ))
}