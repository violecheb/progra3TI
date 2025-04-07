import React from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css"

function Header(){
    let opciones = [
        {name: "Home",
         url: "/"
        }, 
        {name: "Favorites",
         url: "/favorites"
        }, 
        {name: "Top Rated",
         url: "/topRated"
        }, 
        {name: "Upcoming",
         url: "/upcoming"
        }
    ]
    return(
    <nav>
    <img src="./img/logo.png" className="logo" alt="logo"/>
    <Navbar opciones = {opciones}/>
    </nav>
    )
}

export default Header;