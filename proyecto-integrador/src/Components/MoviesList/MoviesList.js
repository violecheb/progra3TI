import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MoviesList (props){
    console.log(props)
    return(
        <div className="seccion-movies">
            <h1 className="header-seccion">{props.header}</h1>
            {props.movies.map(((movie, idx) => 
           <MovieCard key={`${movie}-${idx}`} movie = {movie}/>
            ))}
        <Link to={props.path}>Ver todas</Link>
        </div>
    )
}

export default MoviesList;