import { Component } from "react";
import axios from '../conexion';
var qs = require('qs');

/*const */

class Ingreso extends Component{
    constructor (props){
        super(props);
        this.state={
            label: ''
        }
    }

    ingresar =async (email,pass)=>{
        var data = qs.stringify({
            'UsEmail': email,
            'UsPass': pass 
          });

          var config = {
            method: 'post',
            url: 'http://localhost:3200/api/user/login',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
        const usuario= await axios(config);
        if (usuario.data!=='Incorrect password')
            if(usuario.data!=='User not exist'){
                this.props.log(usuario.data) 
            }else {this.setState({label: usuario.data})}
        else{this.setState({label: usuario.data})}
    }
    
    render(){
        return(
            <div>
                <form>
                    Email: <input type='email' className="element" id='email' ></input><br/>
                    pass: <input type='password' className="element" id='pass' ></input><br/>
                </form>
                <button className="element" onClick={()=>{this.ingresar(document.getElementById('email').value,document.getElementById('pass').value)}}>Ingresar</button>
                <label>{this.state.label}</label>
            </div>
        )
    }

    
}

export default Ingreso;

