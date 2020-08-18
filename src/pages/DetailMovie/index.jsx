import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import Card from "../../components/card"
import "./index.css"

const getDetailMovie = async ({ api_key, language, movieID })=>{
    const urlData = "https://api.themoviedb.org/3",
          { status, statusText, data } = await  axios.get(urlData + `/movie/${ movieID }`,  { 
              params: { api_key, language }
          })

    if(status === 200 && statusText === "OK")
        return data
}


export default ({ match })=> {
    const 
        api_key = "9dffe1ad75dbf83ed2d555cbc14d7a57",
        [ detailMovie, setDetailMovie ] = useState({}),
        [ language, setLanguage ] = useState("es")

    useEffect(()=>{
        getDetailMovie({ api_key, language, movieID: match.params.id }).then( dataDetailMovie => {
            console.log(dataDetailMovie)
            setDetailMovie(dataDetailMovie)
        })
    }, [])
    
    return(
        <div className="containerMovie">
            <Card movie={ detailMovie } key={ detailMovie.id }></Card>
            <div className="descriptionMovie">
                <h1 className="title">{ detailMovie.title }</h1>
                <p className="description">{ detailMovie.overview }</p>
                { genders(detailMovie.genres) }
            </div>
        </div>
    )
}

const genders = (genders)=>{
    if(typeof genders != "undefined"){
        return genders.map( ({ id, name }) => (
            <span className="gender" key={ id }>
                { name }
            </span>
        ))
    }
}