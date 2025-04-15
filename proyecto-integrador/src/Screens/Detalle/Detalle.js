import React, {Component} from "react";
import Loader from "../../Components/Loader/Loader";
import "./Detalle.css";

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state =
        {
            pelicula: [],
            favorito: false
        }
    }

    componentDidMount(){
        let movieId = this.props.match.params.id
        let storage = localStorage.getItem("favorito");
                if (storage !== null){
                    let storageParseado = JSON.parse(storage)
                    let estaMiId = storageParseado.includes(Number(movieId))
                    if (estaMiId){
                        console.log("id  encontrad", estaMiId)
                        this.setState({
                            favorito: true})
                    }
                }

        fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=16165a70d46ac6b42f11100b26969ebb`)
        .then( response => response.json() )
        .then( data => this.setState( //guardamos la peli en el estado y dsps verificamos el storage
            {pelicula: data})
        )
        .catch( error => console.log(error))
    }

    favear(idPelicula){ //replicamos la logica de movieCard para agregar a favoritos
        let storage = localStorage.getItem("favorito");
        if(storage !== null){//si ya existe el item favorito en el storage
            let arrParseado = JSON.parse(storage)
            arrParseado.push(idPelicula)
            let arrStringificado = JSON.stringify(arrParseado)
            localStorage.setItem("favorito", arrStringificado);
        } else{ //si no existe, lo creamos con el primer id
            let primerId = [idPelicula]
            let arrStringificado = JSON.stringify(primerId)
            localStorage.setItem("favorito", arrStringificado)
        }
        this.setState({
            favorito: true
        })
    }

    desfavear(idPelicula){ //replicamos la logica de movieCard para sacar de favoritos
        let storage = localStorage.getItem("favorito");
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
        let movie = this.state.pelicula
        console.log(movie)
        return(
            <div>
             {this.state.pelicula.length === 0 ? 
            <Loader/>  :
            <div className="detalle-container">
            <img src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <p>Fecha de estreno: {movie.release_date}</p>
            <p>Duracion: {movie.runtime} minutos</p>
            <p>{movie.overview}</p>
            <p>Genero/s:</p>
            <ul>
                {movie.genres.map((genre, idx)=> 
                <li key={`${genre.name}-${idx}`}>{genre.name}</li>)}
            </ul>
            {this.state.favorito ? 
            <button onClick={()=> this.desfavear(movie.id)}>❤️</button>:
            <button onClick={()=> this.favear(movie.id)}>🤍</button>
            }
            </div>
            }
            </div>
        )
    }
}

export default Detalle;