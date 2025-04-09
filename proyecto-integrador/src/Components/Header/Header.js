import React from "react";
import OpcionesMenu from "../OpcionesMenu/OpcionesMenu";
// import "./styles.css";

function Header(){
    let links = [
        { name: "Home", path: "/" }, 
        { name: "Favorites", path: "/favorites" }, 
        { name: "Top Rated", path: "/topRated" }, 
        { name: "Upcoming", path: "/upcoming" }
    ];

    return (
        <header>
            <h1>Soy el header</h1>
            <OpcionesMenu opciones={links} />
        </header>
    );
}

export default Header;
