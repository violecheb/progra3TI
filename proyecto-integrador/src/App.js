import React from "react";
import {Switch,Route} from 'react-router-dom'
//import Favoritos from "./Screens/Favoritos/Favoritos";
import Detalle from "./Screens/Detalle/Detalle"
import Error404 from "./Screens/Error/Error"
import Home from "./Screens/Home/Home"
import SearchResults from "./Screens/SearchResults/SearchResults";
// Aca va la importación de los screens cuando los tengamos


function App() {
  return (
    <Switch> 
      <Route path = "/" exact = {true} component = {Home}/>
      <Route path = "/detalle/:id" component = {Detalle}/>
      <Route path="/searchresults/:busqueda" component={SearchResults} />
      <Route component= {Error404} />
    </Switch>
  );
 }
 
 export default App;
