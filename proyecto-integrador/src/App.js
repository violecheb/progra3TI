import React from "react";
import {Switch,Route} from 'react-router-dom'
import { Router } from "react-router-dom/cjs/react-router-dom.min";
//import Favoritos from "./Screens/Favoritos/Favoritos";
import Detalle from "./screens/Detalle/Detalle"
import Header from "./components/Header/Header"
import Error404 from "./screens/Error/Error"
import Home from "./screens/Home/Home"
import Footer from "./components/Footer/Footer";
// Aca va la importación de los screens cuando los tengamos


function App() {
  return (
    <>
    <Header />
    <Switch> 
      <Route path = "/" exact = {true} component = {Home}/>
      <Route path = "/detalle/:id" component = {Detalle}/>
      <Route component= {Error404} />
    </Switch>
    <Footer />
    </>
  );
 }
 
 export default App;
