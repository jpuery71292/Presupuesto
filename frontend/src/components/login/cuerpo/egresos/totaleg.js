import { useEffect,useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import axios from '../../../conexion';

const TotalEg = (props)=>{
    var [suma,setSuma]= useState([]);

    useEffect(()=>{
        cargar()
    })

    const cargar=async()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:3200/api/operation/Egreso/'+ props.id,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        var ingreso= await axios(config);
        let a= ingreso.data[0]["monto"]
        setSuma(a.toFixed(2))
    }

    return(
            <Fragment>{suma}</Fragment>
    )
}

export default TotalEg;