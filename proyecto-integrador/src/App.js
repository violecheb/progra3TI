import React from "react";
import {Switch,Route} from 'react-router-dom'
//import Favoritos from "./Screens/Favoritos/Favoritos";
import Detalle from "./Screens/Detalle/Detalle"
import Header from "./Components/Header/Header"
import Error from "./Screens/Error/Error"
import Home from "./Screens/Home/Home"
import Footer from "./Components/Footer/Footer";
import TopRated from "./Screens/TopRated/TopRated";
import SearchResults from "./Screens/SearchResults/SearchResults";
import Upcoming from "./Screens/Upcoming/Upcoming";
import Favorites from "./Screens/Favorites/Favorites";
// Aca va la importación de los screens cuando los tengamos


function App() {
  return (
    <>
    <Header />
    <Switch> 
      <Route path = "/" exact = {true} component = {Home}/>
      <Route path = "/detalle/:id" component = {Detalle}/>
      <Route path="/toprated" component= {TopRated} />
      <Route path="/searchresults/:busqueda" component={SearchResults}/>
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/favorites" component={Favorites}/>
      <Route component= {Error} />
    </Switch>
    <Footer />
    </>
  );
 }
 
 export default App;
