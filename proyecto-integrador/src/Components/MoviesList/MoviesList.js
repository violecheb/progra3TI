import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./styles.css"


function MoviesList (props){
    console.log("peliculas recibidas", props.movies)
    return(
        <div className="seccion-movies">
            <h1 className="header-seccion">{props.header}</h1>
            <div className="movies-container">
            {props.movies.map(((movie, idx) => 
           <MovieCard key={`${movie.id}-${idx}`} movie = {movie}/> //es esencial movie.id como key, ya que si pongo de key "movie.title-idx" no es realmente unica, y react puede confundir elementos entre renders
            ))}
            </div>
        </div>
    )
}

export default MoviesList;