import React, {Component} from "react";
import "./styles.css";

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            valorInput: ""
        }
    }

    controlarSubmit(event){
        event.preventDefault(); //evitamos la recarga de la aplicacion cuando se envia el form
        if(this.state.valorInput !== ""){
            this.props.history.push(`/searchresults/${this.state.valorInput}`)
        }
    }

    controlarInput(event){
        this.setState({valorInput: event.target.value}
        ) //accedemos a la propiedad del evento donde se guarda el valor ingresado en el input
    }

    render(){
        console.log("input", this.state.valorInput)
        console.log("history ", this.props.history)
        return(
            <form name="buscador" className="search-form" onSubmit={(event)=> this.controlarSubmit(event)}>
                <input placeholder="Buscador" value={this.state.valorInput} onChange={(event) => this.controlarInput(event)}/>
                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default SearchForm;