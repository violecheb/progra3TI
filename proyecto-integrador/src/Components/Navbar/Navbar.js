import React from "react";
import { Link } from "react-router-dom";  

function Navbar(props) {
  return (
    <ul className="main-nav">
      {props.opciones.map((elm, idx) => (
        <li key={`${idx}-${elm.name}`}>
          <Link className="menus" to={elm.url}>{elm.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;