import React from "react";

//no se si asi se hacen los forms en react, lo hice como se de progra 2
function SearchForms (){
    return(
        <form action="/searchResults" method="get">
            <input type="text" name="search" placeholder="Buscar pelicula" ></input>
            <button type="submit">Buscar</button>
        </form> 
    )
}

export default SearchForms;