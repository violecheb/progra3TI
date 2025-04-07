import React, {Component} from "react";


class Detalle extends Component{
    constructor(props){
        super(props)
        this.state ={
            movie : null,
            Cargando: true
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=16165a70d46ac6b42f11100b26969ebb`)
        .then((response) => response.json())
        .then ((data) => {
            this.setState({
                movie:data,
                Cargando: false
            })
        })
        .catch((error) => {
            console.log('El error fue: ' + error);
        })
        
    }
    render(){
            let {movie, Cargando } = this.state;
            if (Cargando ) return <h2> Cargando...</h2>
        return(
            <div> 
                <h2>Titulo: {movie.title}</h2>
                <img src = {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                <p>Calificación:{movie.vote_average}</p>
                <p>Fecha de estreno:{movie.release_date}</p>
                <p>Duración minutos:{movie.runtime} </p>
                <p>Sinopsis: {movie.overview}</p>
                <p>Genero: {movie.genres.map((genre) => genre.name).join(', ')}</p>
            </div>
        )

    }

}

export default Detalle