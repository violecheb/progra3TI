import React, {Component} from "react";

class Detalle extends Component{
    constructor(props){
        super(props)
        this.state ={
            movie : null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}`)
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
            let {movie} = this.state;
            if (!movie) return <h2> Cargando...</h2>
        return(
            <div> 
                <h2>{movie.title}</h2>
                <img src = {movie.img}/>
                <p>Calificación:{movie.vote_average}</p>
                <p>Fecha de estreno:{movie.release_date}</p>
                <p>Duración{movie.runtime} minutos</p>
                <p>Sinopsis: {movie.overview}</p>
                <p>Genero: {movie.genres.map((genre) => genre.name)}</p>
            </div>
        )

    }
    
    
            
        
    

}

export default Detalle