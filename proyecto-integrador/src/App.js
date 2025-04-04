import React from "react";
import {Switch,Route} from 'react-router-dom'
import { Router } from "react-router-dom/cjs/react-router-dom.min";
// Aca va la importación de los screens cuando los tengamos

//Acá va la importación de la api




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
