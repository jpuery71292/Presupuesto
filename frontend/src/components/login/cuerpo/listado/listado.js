import { Component } from "react";
import Titulo from "./titulos";
import Datos from "./datos";

class Listado extends Component{
    render(){
        return(
            <table>
                <Titulo/>
                <Datos id={this.props.id} modificar={this.props.modificar}/>
            </table>
        )
    }
}
export default Listado