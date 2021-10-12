import axios from '../../../conexion';
import Categorias from './categorias-listado';
var qs = require('qs');

const Nuevos =(props)=>{
    const cargar= async (concepto, monto, fecha, tipo, categoria)=>{
        var data = qs.stringify({
            'concepto': concepto,
            'monto': monto,
            'fecha':fecha,
            'tipo':tipo,
            'categoriumIdCategoria': categoria
          });
        if (concepto==='' || monto==='' || fecha===''){
            console.log(`cargar dato`)
        }else{
            var config = {
                method: 'post',
                url: 'http://localhost:3200/api/operation/'+ props.id,
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };
            const operation= await axios(config);
            console.log(operation);
        }
    }

    return(
        <div>
            <h2>Nuevos</h2>
            <form>
                Tipo:
                <select id='select'>
                    <option>Ingreso</option>
                    <option>Egreso</option>
                </select>
                concepto: <input id='concepto'></input>
                monto: <input id='monto'></input>
                fecha: <input type='date' id='fecha'></input>
                categoria:<Categorias />
            </form>
            <button onClick={()=>{cargar(document.getElementById('concepto').value, document.getElementById('monto').value, document.getElementById('fecha').value, document.getElementById('select').value,document.getElementById('cat').value)}}>Cargar</button>
        </div>
    )
}

export default Nuevos;