import React from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header(){
    let opciones = [
        {name: "Home",
         url: "/"
        }, 
        {name: "Favorites",
         url: "/favorites"
        }, 
        {name: "Top Rated",
         url: "/toprated"
        }, 
        {name: "Upcoming",
         url: "/upcoming"
        }
    ]
    return(
    <nav>
    <Link to="/"><img src="./img/logo.png" className="logo" alt="logo"/></Link>
    <Navbar opciones = {opciones}/>
    </nav>
    )
}

export default Header;
