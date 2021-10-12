import { useState,useEffect } from "react";
import axios from '../../../conexion'

const Datosingreso = (props)=>{
    var [operaciones,setOperaciones]= useState([]);

    useEffect(()=>{
        cargar()
    })
    
    const cargar= async ()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:3200/api/operation/'+ props.id+'/Ingreso',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        const operation= await axios(config);
        setOperaciones(operation.data);
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                </tr>
            </thead>
            <tbody>
                {
                    operaciones.map(operaciones=>(
                        <tr key={operaciones.id_oper}>
                            <th>{operaciones.fecha}</th>
                            <th>{operaciones.concepto}</th>
                            <th>{operaciones.monto}</th>
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

export default Datosingreso;