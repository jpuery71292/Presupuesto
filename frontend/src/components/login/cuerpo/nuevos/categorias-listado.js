import { useState,useEffect } from "react";
import axios from '../../../conexion';

const Categorias =(props)=>{
    var [categoria,setcategory]= useState([]);

    useEffect(()=>{
        cargar()
    })
    
    const cargar= async ()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:3200/api/category/',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
        };
        const category= await axios(config)
        setcategory(category.data)
    }

    return(
        <select id='cat'>
            {categoria.map(categoria=>(
               <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.detalle}</option> 
            ))
            }
        </select>
    )
}

export default Categorias