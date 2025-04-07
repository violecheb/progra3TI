import React from "react";
import SearchForms from "../../Components/SearchForm/SearchForm";

//esperando a tener la info de las apis
function Home(){
    return(
        <main>
        <SearchForms/>
        <MoviesList header= "Top Rated Movies" movies = {fakeTop}/>
        <MoviesList header= "Upcoming Movies" movies = {fakeUpcoming}/>
       </main>
    )
}

export default Home;