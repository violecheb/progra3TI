import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MoviesList (props){
    console.log(props)
    return(
        <div className="seccion-movies">
            <h1 className="header-seccion">{props.header}</h1>
            {props.movies.map(((movie, idx) => 
           <MovieCard key={`${movie.id}-${idx}`} movie = {movie}/>
            ))}
        </div>
    )
}

export default MoviesList;