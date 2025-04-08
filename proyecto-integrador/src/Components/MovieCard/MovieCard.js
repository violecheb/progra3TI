import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: props.movie,
            mostrarContenido: false,
            esFavorito: false 
        }
    }

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido //guarda el contrario
        }
        )
    }

    favear(){
        this.setState({
            esFavorito: !this.state.esFavorito //guarda el contrario
        })
    }
    
    render(){
       console.log()
       const movie = this.state.valor;
       return(
        <>
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
        <h1>{movie.title}</h1>
        {this.state.mostrarContenido === true ? 
        <p>{movie.overview}</p> : ""}
        <button onClick={()=> this.ocultar()}>Ver descripcion</button>
        <Link to={`/detalle/${movie.id}`}>Ir a detalle</Link>
        <button onClick={()=> this.favear()}>{this.state.esFavorito ? "❤️" : "🤍"}</button>
        </>
        
       )
    }
}

export default MovieCard;