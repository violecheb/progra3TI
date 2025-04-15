import React, {Component} from "react";
import Loader from "../../Components/Loader/Loader";
import MoviesList from "../../Components/MoviesList/MoviesList";
import "./SearchResults.css";

class SearchResults extends Component{
    constructor(props){
        super(props)
        this.state = {
            resultados: [],
            recibido: false,
            busqueda: props.match.params.busqueda
        }
    }

    componentDidMount(){
        fetch (`https://api.themoviedb.org/3/search/movie?api_key=16165a70d46ac6b42f11100b26969ebb&query=${this.state.busqueda}`)
        .then( (response => response.json()) )
        .then( data => this.setState(
            {resultados: data.results,
            recibido: true
            } //recibe un objeto literal
        ))
        .catch( error => console.log(error) )}
    
    render(){
        const resultados = this.state.resultados
        console.log("resultados", resultados)
        return(
            <main className="search-results">
            {!this.state.recibido ? 
            <>
            <Loader/> 
            </>: this.state.resultados.length == 0 ? <h1>No se encontraron peliculas</h1>:
            <MoviesList header= "Resultados de busqueda" movies = {this.state.resultados}/>
            }
            </main>
        )
    }

}

export default SearchResults;