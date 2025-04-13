import React , {Component} from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Loader from "../../Components/Loader/Loader";
import "./styles.css";

class Favorites extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculasFav: [],
            hayElementosFaveados: false
        }
    }

    componentDidMount(){
        const storeageFavoritos = localStorage.getItem("favorito")
        if(storeageFavoritos !== null){ //existe el storage por lo que es suseptible a ser parseado
            let favParseado = JSON.parse(storeageFavoritos) //parseamos los favoritos
            if(favParseado.length > 0){ //hay alguna pelicula favorita
                Promise.all( //recibe un array de promesas y se ejecuta cuando se hayan completado todas esas promesas
                    favParseado.map((idPelicula)=> fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=16165a70d46ac6b42f11100b26969ebb`)
                        .then((resp) => resp.json())
                        .catch(e=> console.log(e))
                    )
                )
                .then((data)=> this.setState(
                    {peliculasFav: data,
                    hayElementosFaveados: true
                }))
                .catch(e=> console.log(e))
            } else{
                this.setState({
                    peliculasFav: [],
                    hayElementosFaveados: true
                })
            }
        }
    }

    filtrarPeliculas(id){ //sacar de favoritos los que saco
        const peliculasFiltradas = this.state.peliculasFav.filter(elm => elm.id !== id)
        console.log("originales", this.state.peliculasFav)
        console.log("sobrantes", peliculasFiltradas)
        this.setState({
            peliculasFav : peliculasFiltradas
        })
    }

    render()
    {
        return(
            <div className="favorites-container">
            {this.state.hayElementosFaveados === false?
            <Loader/> :
            this.state.peliculasFav.length > 0 
            ?
            <>
            <h1 className="favorites-heading">Favorites Movies</h1>
            <div className="favorites-list">
            {this.state.peliculasFav.map((elm, idx)=>
            <MovieCard movie={elm} key= {idx + elm.id} sacarDeFavs={(id)=> this.filtrarPeliculas(id)}/>)} 
            </div>
            </>
            : 
            <h1>No hay peliculas favoritas</h1>
        }
            </div>
        )
    }
}

export default Favorites;