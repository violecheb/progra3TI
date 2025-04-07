import React from "react";
import {Switch,Route} from 'react-router-dom'
import { Router } from "react-router-dom/cjs/react-router-dom.min";
//import Favoritos from "./Screens/Favoritos/Favoritos";
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle"
import Error404 from "./screens/Error/Error"
// Aca va la importación de los screens cuando los tengamos


function App() {
  return (
    <Switch> 
      <Route path = "/" exact = {true} component = {Home}/>
      <Route path = "/detalle/:id" component = {Detalle}/>
      <Route component= {Error404} />
    </Switch>
  );
 }
 
 export default App;
