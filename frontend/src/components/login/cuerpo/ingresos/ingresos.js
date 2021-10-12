import { Component } from "react";
import Datosingreso from "./datos-ingreso";
import TotalIng from "./totalIng";

class Ingresos extends Component{
    render(){
        return(
            <div className="Ingreso">
                <h1>Ingresos <TotalIng id={this.props.id}/></h1>
                <Datosingreso id={this.props.id}/>
            </div>
        )
    }
}

export default Ingresos;