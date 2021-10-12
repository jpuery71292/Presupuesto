import { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import axios from '../../../conexion';

class TotalIng extends Component{
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
        this.setState({suma: a.toFixed(2)})
    }

    render(){
        return(
            <Fragment>{this.state.suma}</Fragment>
        )
    }
}

export default TotalIng;