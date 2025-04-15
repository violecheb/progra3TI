import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Error.css";

function NotFound(){
    return(
    <div className="not-found">
        <h1>Lost your way?</h1>
        <p>Sorry, we cant find that page. Youll find lots to explore on the home page</p>
        <Link to="/"><button>Netflix Home</button></Link>
    </div>
    )
}

export default NotFound;