import React, {Component} from "react";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=1')
        .then( response => response.json() )
        .then( data => this.setState(
            {topRated: data.results} //recibe un objeto literal
        ))
        .catch( error => console.log(error) )

        //pedido 2: Upcoming
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=16165a70d46ac6b42f11100b26969ebb&language=en-US&page=1')
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
            <Loader/> :
            <>
            <MoviesList header= "Top Rated Movies" movies = {this.state.topRated.slice(0, 5)}/>
            <Link to="/toprated">Ver todas</Link>
            <MoviesList header= "Upcoming Movies" movies = {this.state.upcoming.slice(0, 5)}/>
            <Link to="/upcoming">Ver todas</Link>
            </>
            }
            </main>
        )
    }
}


export default Home;