import React, { Component } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=`;

class MasPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      valorFiltrado: "",
      paginaActual: 1,
      loading: true,
    };
  }

  fetchMovies = () => {
    this.setState({ loading: true });

    fetch(`${baseURL}${this.state.paginaActual}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          peliculas: [...prevState.peliculas, ...data.results],
          paginaActual: prevState.paginaActual + 1,
          loading: false,
        }));
      })
      .catch((err) => {
        console.error("Error al cargar las películas:", err);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  handleLoadMore = () => {
    this.fetchMovies();
  };

  handleFilter = (e) => {
    this.setState({
        valorFiltrado: e.target.value.toLowerCase()
    });
  };

  handleResetFilter = () => {
    this.setState({
        valorFiltrado: ""
    });
}


render(){
    const peliculasMostradas = this.state.peliculas.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(this.state.valorFiltrado)
    );
    return(
        <div> 
            <input 
                type="text"
                value={this.state.valorFiltrado}
                onChange={this.handleFilter}
                placeholder="Filtrar Peliculas"
            /> 
            <button onClick={this.handleResetFilter}>Eliminar Filtro</button>
            {this.state.loading ? 
                <p> Cargando las peliculas...</p> : 
                <MoviesList header="Peliculas populares movies" movies={peliculasMostradas} path=""/>}
            <button onClick={this.handleLoadMore}> Cargar más películas</button>
        </div>
    );
}

}

export default MasPopulares;
