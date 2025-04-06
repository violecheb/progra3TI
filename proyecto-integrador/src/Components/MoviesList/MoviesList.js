import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MoviesList (props){
    console.log(props)
    return(
        <div className="seccion-movies">
            <h1 className="header-seccion">{props.header}</h1>
            {props.movies.map(((movie, idx) => 
            idx < 5 ? <MovieCard key={`${movie}-${idx}`} movie = {movie}/> : null
            ))}
        </div>
    )
}

export default MoviesList;