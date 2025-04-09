import React from "react";
import { Link } from "react-router-dom";  

function OpcionesMenu(props) {

  return (
    <ul className="main-nav">
      {props.opciones.map((item, idx) => 
        <li key={`${item}-${idx}`} >
          <Link className="menus" to={item.path}>{item.name}</Link>
        </li>
      )}
      
    </ul>
  );
}

export default OpcionesMenu;