import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import { useState } from "react"
import AllDeleteButton from "./AllDeleteButton"
import ReloadButton from "./ReloadButton"


const Movie = () => {

    //KAPITOLA 49.
    const [movieList, setMovieList] = useState(data) //nastavím jako původní proměnnou všechna data
    // useStae používá stavy
    // setMovieList funkce, vyrendruje -refreshne stránku 

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return oneMovie.id !== idecko
        })
        
        setMovieList(filteredMovies)
        //všechny objekty kromě daného idecko na které kliknu a vrať je zpátky přes setMovieList

    }

    const allDelete = () => {
        setMovieList([])
    }

    const reload = () => {
        setMovieList(data) 
    }

    //ZMĚNA PRO KAPITOLU 49 z data na movieList mapování, chci rendrovat z dat nahoře
    return ( <section>
        <div className ="all-movies">
            { movieList.map( (oneMovie) => { //projde postupně v cyklu
                    const {id, image, title, age, tags, description} = oneMovie // objekt musím složené závorky, [] pro pole
                    // nutné dát i div key kvůli přiřazení id pro každý prvek
                    return <div className ="one-movie" key ={id}>  
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteMovie = { () =>deleteOneMovie(id)}/> 
                        </div>
                }) 
            } 
          
            </div>
              <div className ="button-box">
                <AllDeleteButton deleteAll = {allDelete} />
                <ReloadButton reloadAll = {reload} />
            </div>
        </section> 
        )
    
}

export default Movie

