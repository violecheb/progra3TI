import React, {Component} from "react";

class Filtro extends Component{
    constructor(props){
        super(props)
        this.state=
        {valorInput: ""}
    }

    manejarSubmit(event){
        event.preventDefault(); //evitamos la recarga de la aplicacion cuando se envia el form
    }

    controlarInput(event){
        this.setState({valorInput: event.target.value},
            () => this.props.filtro(this.state.valorInput)
        ) //accedemos a la propiedad del evento donde se guarda el valor ingresado en el input
    }

    render(){
        return(
            <form name="filtro" onSubmit={(event)=> this.manejarSubmit(event)}>
                <input onChange={(event) => this.controlarInput(event)} value={this.state.valorInput}/>
            </form>
        )
    }
}

export default Filtro;