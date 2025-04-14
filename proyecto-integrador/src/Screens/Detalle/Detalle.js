import React, {Component} from "react";
import './styles.css'
import Loader from "../../Components/Loader/Loader";

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state ={
            movie : []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=16165a70d46ac6b42f11100b26969ebb`)
        .then((response) => response.json())
        .then ((data) => {
            this.setState({
                movie:data
            })
        })
        .catch((error) => {
            console.log('El error fue: ' + error);
        })
        
    }
    render(){
            let movie = this.state.movie
        return(
            <>
            {this.state.movie.length == 0?
                  <Loader/>:
            <div className="detalle-container"> 
                <h2>Titulo: {movie.title}</h2>
                <img src = {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                <p>Calificación: {movie.vote_average}</p>
                <p>Fecha de estreno: {movie.release_date}</p>
                <p>Duración: {movie.runtime} minutos </p>
                <p>Sinopsis: {movie.overview}</p>
                <p>Genero/s: </p>
                <ul>
                    {movie.genres.map((genre, i) => <li key = {`${genre.name}-${i}`}> {genre.name}</li>)}
                </ul>
            </div>
                }  
            </>
        )

    }

}

export default Detalle