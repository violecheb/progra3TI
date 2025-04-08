import React, {Component} from "react";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesList from "../../Components/MoviesList/MoviesList";

class Home extends Component{
    constructor(props){
        super(props)
        this.state=
        {topRated: [],
        upcoming: []
        }

    }

    componentDidMount(){
        //pedido 1: Top Rated
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=1')
        .then( response => response.json() )
        .then( data => this.setState(
            {topRated: data.results}
        ))
        .catch( error => console.log(error) )

        //pedido 2: Upcoming
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=16165a70d46ac6b42f11100b26969ebb&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-01-01&release_date.lte=2024-12-31')
        .then( response => response.json() )
        .then( data2 => this.setState(
            {upcoming: data2.results}
        ))
        .catch( error => console.log(error) )
    }


    render(){
        return(
            <main>
            {this.state.topRated.length === 0 || this.state.upcoming.length === 0 ? 
            <h3>Cargando...</h3> :
            <>
            <SearchForm/>
            <MoviesList header= "Top Rated Movies" movies = {this.state.topRated.slice(0, 5)} path="/topRated"/>
            <MoviesList header= "Upcoming Movies" movies = {this.state.upcoming.slice(0, 5)} path="/upcoming"/>
            </>
            }
            </main>
        )
    }
}


export default Home;