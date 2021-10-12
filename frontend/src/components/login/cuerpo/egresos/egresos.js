import { Component } from "react";
import DatosEgreso from "./datos-egresos";
import TotalEg from "./totaleg";

class Egresos extends Component{
    render(){
        return(
            <div className="Egreso">
                <h1>Egresos <TotalEg id={this.props.id}/></h1>
                <DatosEgreso id={this.props.id}/>
            </div>
        )
    }
}

export default Egresos;