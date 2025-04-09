import React, {Component} from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader/Loader";
import Filtro from "../../components/Filtro/Filtro";

class Upcoming extends Component{
    constructor(props){
        super(props)
        this.state = {
            upcoming: [], //constante modificacion
            backup: [], //para hacer comparaciones, sin modificar
            pagActual: 1,
            filterText: ""
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
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=${nuevaPag}`)
        .then(response => response.json())
        .then(data => {
            this.setState( prevState => {
                //concatenamos los nuevos resultados con los del estado actual
                const newBackup = prevState.backup.concat(data.results);
                //si el filtro esta activo (filterText no vacio), aplicamos el filtro a las nuevas peliculas
                const newUpcoming = prevState.filterText ?
                newBackup.filter(movie => 
                    movie.title.toLowerCase().includes(prevState.filterText.toLowerCase())
                )
                : newBackup;
            return{
                backup: newBackup, 
                upcoming: newUpcoming,
                pagActual: nuevaPag }
            });
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