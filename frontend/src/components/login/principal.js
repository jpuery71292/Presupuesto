import { Component } from "react"
import Cuerpo from "./cuerpo/cuerpo"
import Encabezado from "./encabezado"



class Principal extends Component{
    render(){
        return(
            <div>
                <Encabezado id= {this.props.id} />
                <Cuerpo id= {this.props.id} />
            </div>
        )
    }
}

export default Principal;