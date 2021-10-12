import React, { Component } from "react";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Ingreso from "./logout/ingreso";
import Registro from "./logout/registro";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            bandera: false
        }
    }

    render(){
        return (
            <div className="Menu">
                <button onClick={()=>{this.setState({bandera: false})}}>Registrar</button>
                <button onClick={()=>{this.setState({bandera: true})}}>Ingresar</button>
                <div className="boddy-Log">{this.state.bandera ? <Ingreso log={this.props.log}/> : <Registro log={this.props.log}/>}</div>
            </div>
        )
    }
}


export default Menu;