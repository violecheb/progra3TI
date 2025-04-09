import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: props.movie,
            mostrarContenido: false,
            favorito: false 
        }
    }

    ocultar(){
        this.setState({
            mostrarContenido: !this.state.mostrarContenido //guarda el contrario
        }
        )
    }

    componentDidMount(){
        let storage= localStorage.getItem("favorito")
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            let estaMiId = storageParseado.includes(this.state.valor.id) //chequeamos si el id de cada pelicula esta en el localStorage

            if(estaMiId){
                this.setState({
                    favorito: true //si el id ya esta en el storage, el state favorito pasa a ser true, entonces al recargar se mantiene en fav.
                })
            }
        }
    }
    
    favear(idPelicula){
        let storage = localStorage.getItem("favorito")
        if(storage !== null){ // si la propiedad favorito existe en el localStorage
            let arrParseado = JSON.parse(storage) //pasa un string a su tipo de dato que realmente debia ser
            arrParseado.push(idPelicula) //le agrego el id de la pelicula al array
            let arrStringificado = JSON.stringify(arrParseado) //lo vuelvo a pasar a string para poder guardarlo en la memoria
            localStorage.setItem("favorito", arrStringificado) //guarda en la propiedad favorito el array stringificado
        } else{ //si no existe la propiedad favorito en el localStorage
            let primerId = [idPelicula] //guardo el primer favorito
            let arrStringificado = JSON.stringify(primerId)
            localStorage.setItem("favorito", arrStringificado) //Creo la propiedad favorito y guardo el primer id
        }

        this.setState({
            favorito: true
        })
    }
    
    desfavear(idPelicula){
        const storage = localStorage.getItem("favorito")
        const storageParseado = JSON.parse(storage) //no hacemos el if porque si esta la opcion de sacar de favorito es porque ya existe la propiedad en el storage
        const filtrarStorage = storageParseado.filter((id) =>
        id !== idPelicula) //guardo las peliculas con id diferente al que quiero desfavear
        const storageStringificado = JSON.stringify(filtrarStorage) //lo vuelvo string para poder guardarlo
        localStorage.setItem("favorito", storageStringificado) //guardo el nuevo string, sin el id desfaveado, en el local storage

        this.setState({
            favorito: false
        })
    }

    render(){
       const movie = this.state.valor;
       console.log("movie card recibe:", movie)
       return(
        <>
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
        <h1>{movie.title}</h1>
        {this.state.mostrarContenido === true ? 
        <p>{movie.overview}</p> : ""}
        <button onClick={()=> this.ocultar()}>Ver descripcion</button>
        <Link to={`/detalle/${movie.id}`}>Ir a detalle</Link>
        {
            this.state.favorito ? 
            <button onClick={()=> this.desfavear(movie.id)}>❤️</button>
            :

        <button onClick={()=> this.favear(movie.id)}>🤍</button>
        }
        </>
       )
    }
}

export default MovieCard;