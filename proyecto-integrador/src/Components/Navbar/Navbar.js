import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.css"

function Navbar(props){
    return(
    <ul className="main-nav">
    {props.opciones.map((elm, idx)=> 
    <li key={${elm.name}-${idx}} ><Link className="menus" to={elm.url}>{elm.name}</Link></li>)}
    </ul>
    )
}

export default Navbar;