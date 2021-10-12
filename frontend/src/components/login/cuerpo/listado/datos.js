import { useEffect,useState } from "react";
import axios from '../../../conexion';


const Datos= (props)=>{
    var [operaciones,setOperaciones]= useState([]);

    useEffect(()=>{
        cargar()
    })
    
    const cargar= async ()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:3200/api/operation/'+ props.id,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        const operation= await axios(config)
        setOperaciones(operation.data)
    }

    const eliminar= async (id)=>{
        var config = {
            method: 'delete',
            url: 'http://localhost:3200/api/operation/'+ id,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        await axios(config);
        cargar();
    }
    
        return(
            <tbody>
                {
                    operaciones.map(operaciones=>(
                        <tr key={operaciones.id_oper}>
                            <th>{operaciones.concepto}</th>
                            <th>{operaciones.monto}</th>
                            <th>{operaciones.tipo}</th> 
                            <th>{operaciones.fecha}</th>
                            <th>{operaciones.categoriumIdCategoria}</th>
                            <th><button onClick={()=>{props.modificar(operaciones)}}>Modificar</button></th>
                            <th><button onClick={()=>{eliminar(operaciones.id_oper)}}>Eliminar</button></th>
                        </tr>
                        )
                    )
                }
            </tbody>
        )
    
}

export default Datos;