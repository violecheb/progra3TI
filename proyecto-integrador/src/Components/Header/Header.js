import React from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css";

function Header(){
    let opciones = [
        { name: "Home", url: "/" }, 
        { name: "Favorites", url: "/favorites" }, 
        { name: "Top Rated", url: "/topRated" }, 
        { name: "Upcoming", url: "/upcoming" }
    ];

    return (
        <header>
            <h1>Soy el header</h1>
            <Navbar opciones={opciones} />
        </header>
    );
}

export default Header;
