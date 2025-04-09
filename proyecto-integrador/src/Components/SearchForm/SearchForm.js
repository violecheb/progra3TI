import React, {Component} from "react";

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
            <form name="buscador" onSubmit={(event)=> this.controlarSubmit(event)}>
                <input onChange={(event) => this.controlarInput(event)} value={this.state.valorInput}/>
                <button>Buscar</button>
            </form>
        )
    }
}

export default SearchForm;