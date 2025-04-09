import React from "react";
import { Link } from "react-router-dom";  

function OpcionesMenu({opciones}) {

  return (
    <ul className="main-nav">
      {opciones.map((item) => (
        <li>
          <Link className="menus" to={item.path}>{item.name}</Link>
        </li>
      ))}
      
    </ul>
  );
}

export default OpcionesMenu;