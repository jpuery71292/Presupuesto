import { Component } from "react";
import axios from '../conexion';
var qs = require('qs');

class Registro extends Component{
    constructor (props){
        super(props);
        this.state={
            label: ''
        }
    }

    registrar =async (nombre,apellido,email,pass)=>{
        var data = qs.stringify({
            'UsNombre':nombre,
            'UsApellido':apellido,
            'UsEmail': email,
            'UsPass': pass 
          });

          var config = {
            method: 'post',
            url: 'http://localhost:3200/api/user/create',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
        const usuario= await axios(config);
        if (usuario.data!=='User exist')
                this.props.log(usuario.data) 
        else{this.setState({label: usuario.data})}
    }

    render(){
        return(
            <div>
                <form>
                    Nombre: <input className="element" id='nombre'></input><br/>
                    Apellido: <input className="element" id='apellido'></input><br/>
                    Email: <input type="email" className="element" id='email'></input><br/>
                    Contraseña: <input type="password" className="element" id='pass'></input><br/>
                </form>
                <button className="element" onClick={()=>{this.registrar(document.getElementById('nombre').value, document.getElementById('apellido').value, document.getElementById('email').value, document.getElementById('pass').value)}}>Registrarse</button>
                <label>{this.state.label}</label>
            </div>
        )
    }
}

export default Registro;