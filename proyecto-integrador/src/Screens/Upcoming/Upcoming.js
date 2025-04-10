import React, {Component} from "react";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Loader from "../../Components/Loader/Loader";
import Filtro from "../../Components/Filtro/Filtro";

//se repiten algunas peliculas, no se si es problema del enpoint o que

class Upcoming extends Component{
    constructor(props){
        super(props)
        this.state = {
            upcoming: [], //constante modificacion
            backup: [], //para hacer comparaciones, sin modificar
            pagActual: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=1')
        .then( response => response.json() )
        .then( data => this.setState(
            {upcoming: data.results, backup: data.results} //recibe un objeto literal
        ))
        .catch( error => console.log(error) )
    }

    filtrarPeliculas(busquedaUsuario){
        const peliculasFiltradas = this.state.backup.filter((movie)=>
        movie.title.toLowerCase().includes(busquedaUsuario.toLowerCase()))
        this.setState({upcoming: peliculasFiltradas, 
            filterText: busquedaUsuario
        })
    }

    loadMore(){ 
        const nuevaPag = this.state.pagActual + 1; //incrementa pagActual
        //hacemos fetch a esa nueva pagina
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=16165a70d46ac6b42f11100b26969ebb&page=${nuevaPag}`)
        .then(response => response.json())
        .then(data => {
            console.log("RESULTADOS", data.results)
            this.setState( 
                {backup: this.state.backup.concat(data.results), //concatenamos las peliculas que teniamos con de la nueva pagina
                upcoming: this.state.backup.concat(data.results),
                pagActual: nuevaPag}
            );
        })
        .catch(err=> console.log(err));
    } 

    render(){
        console.log("todas", this.state.backup)
        console.log("filtradas", this.state.upcoming)
        return(
            <main>
            <Filtro filtro= {(busqueda)=> this.filtrarPeliculas(busqueda)}/>
            {this.state.backup.length === 0 ? 
            <Loader/> 
            : this.state.upcoming.length == 0 ? <h1>No se encontraron peliculas</h1>:
            <>
            <MoviesList header= "Upcoming Movies" movies = {this.state.upcoming}/>
            <button onClick={()=> this.loadMore()}>Cargar más</button>
            </>
            }
            </main>
        )
    }
    
}

export default Upcoming;