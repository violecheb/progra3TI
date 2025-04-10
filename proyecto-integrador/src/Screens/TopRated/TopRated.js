import React, {Component} from "react";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Loader from "../../Components/Loader/Loader";
import Filtro from "../../Components/Filtro/Filtro";


class TopRated extends Component{
    constructor(props){
        super(props)
        this.state = {
            topRated: [], //lista mostrada (posiblemente filtrada)
            backup: [], //para hacer comparaciones, sin modificar
            pagActual: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=${this.state.pagActual"})
        .then( response => response.json() )
        .then( data => this.setState(
            {
            topRated: data.results, 
            backup: data.results,
            pagActual: 1} //recibe un objeto literal
        ))
        .catch( error => console.log(error) )
    }

    filtrarPeliculas(busquedaUsuario){
        const peliculasFiltradas = this.state.backup.filter((movie)=>
        movie.title.toLowerCase().includes(busquedaUsuario.toLowerCase()))
        this.setState({topRated: peliculasFiltradas,
            filterText: busquedaUsuario
        }
        )
    }

    loadMore(){ 
        const nuevaPag = this.state.pagActual + 1; //incrementa pagActual 
        // //hacemos fetch a esa nueva pagina
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=16165a70d46ac6b42f11100b26969ebb&page=${nuevaPag"})
        .then(response => response.json())
        .then(data => {
            console.log("RESULTADOS", data.results)
            this.setState( 
                {backup: this.state.backup.concat(data.results), //concatenamos las peliculas que teniamos con de la nueva pagina
                topRated: this.state.backup.concat(data.results),
                pagActual: nuevaPag}
            );
        })
        .catch(err=> console.log(err));
    } 

    render(){
        console.log("todas", this.state.backup)
        console.log("filtradas", this.state.topRated)
        return(
            <main>
            <Filtro filtro= {(busqueda)=> this.filtrarPeliculas(busqueda)}/>
            {this.state.backup.length === 0 ? 
            <Loader/> 
            : this.state.topRated.length == 0 ? <h1>No se encontraron peliculas</h1>:
            <>
            <MoviesList header= "Top Rated Movies" movies = {this.state.topRated}/>
            <button onClick={()=> this.loadMore()}>Cargar más</button>
            </>
            }
            </main>
        )
    }
    
}

export default TopRated;