import { Component } from "react";
import Egresos from "./egresos/egresos";
import Ingresos from "./ingresos/ingresos";
import Listado from "./listado/listado";
import Nuevos from "./nuevos/nuevos";
import Categorias from "./nuevos/categorias-listado";

class Cuerpo extends Component{
    constructor(props){
        super(props);
        this.state={
            change: false
        }
    }

    modificar= (operaciones)=>{
        var div = document.getElementById('Modificar');
        console.log(div);
        div.style.display= 'block';
        div.style.visibility= 'visible';
        
        this.setState({
            change: true,
            id_oper: operaciones.id_oper,
            concepto: operaciones.concepto,
            monto: operaciones.monto,
            tipo: operaciones.tipo,
            fecha: operaciones.fecha,
            categoriumIdCategoria: operaciones.categoriumIdCategoria
        });
        
    }

    cerrar=()=>{
        var div = document.getElementById('Modificar');
        div.style.display= 'none';
        div.style.visibility= 'hidden'; 
    }

    render(){
        return(
            <div>
                <div className="Principal">
                    <Listado id= {this.props.id} modificar={this.modificar}/>
                    <div id='Modificar' className='Modificar'>
                        <h1>Modificar {this.state.id_oper} de fecha {this.state.fecha}</h1><br/>
                        concepto: <input value={this.state.concepto} onChange={e => this.modificar({...this.state, concepto: e.target.value})}></input> <br/><br/>
                        monto: <input value={this.state.monto} onChange={e => this.modificar({...this.state, monto: e.target.value})}></input> <br/><br/>
                        fecha: <input type='date'></input> <br/><br/>
                        categoria: <Categorias/> <br/><br/><br/>
                        <button>Aceptar</button>
                        <button onClick={this.cerrar}>Cerrar</button>
                    </div>
                    <Nuevos id={this.props.id} />
                </div>
                <div >
                    <Ingresos id= {this.props.id}/>
                    <Egresos id= {this.props.id}/>
                </div>
            </div>
        )
    }
}

export default Cuerpo;