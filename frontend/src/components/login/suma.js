import { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import axios from '../conexion';

class Suma extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    async componentDidMount(){
        var config = {
            method: 'get',
            url: 'http://localhost:3200/api/operation/Ingreso/'+ this.props.id,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        var ingreso= await axios(config);
        let a= ingreso.data[0]["monto"]
    
        config = {
            method: 'get',
            url: 'http://localhost:3200/api/operation/Egreso/'+ this.props.id,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        var egreso= await axios(config)
        let b = egreso.data[0]["monto"]

        var res=a-b
        this.setState({suma: res.toFixed(2)})
    }

    render(){
        return(
            <Fragment>{this.state.suma}</Fragment>
        )
    }
}

export default Suma;