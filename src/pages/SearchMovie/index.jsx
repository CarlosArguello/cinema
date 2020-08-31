import React, { useState, useEffect } from "react"
import Card from "../../components/card"
import queryString from 'query-string'
import { Link } from 'react-router-dom';
import axios from "axios"

const searchMovies = async ({ api_key, language, page, query })=>{
    const urlData = "https://api.themoviedb.org/3",
        { status, statusText, data } = await  axios.get(urlData + "/search/movie",  { 
            params: { 
                api_key, language, query, page
            }
        })

    if(status === 200 && statusText === "OK")
        return data
}


export default ({ location  })=> {
    
    const 
        [ page, setPage ] = useState(1),
        [ movies, setMovies ] = useState([]),  
        [ language, setLanguage ] = useState("es"),
        api_key = "9dffe1ad75dbf83ed2d555cbc14d7a57",
        [ lastLocation, setLastLocation ] = useState(location)
        

        useEffect(()=>{
            const { query = "" } = queryString.parse(location.search)

            searchMovies({ api_key, language, page, query }).then(dataMovies => {

                if(!movies.length || lastLocation.search != location.search){
                    setLastLocation(location)
                    return setMovies(dataMovies.results)
                }
    
                setMovies(movies.concat(dataMovies.results))
            })
        }, [ page, location ])
        
        document.body.onscroll = ()=>{
            if(window.scrollY >= window.scrollMaxY)
                setPage(page+1)
        }

    return movies.map( (movie, index) =>(
        <Link to={`/movies/${ movie.id }`}>
            <Card movie={ movie } key={ index }></Card>
        </Link>
    ))
}