
import Suma from "../login/suma"

function Encabezado (props){


    return(
        <div className="Principal">
            <h1>Presupuesto Personal</h1>
            <h2>Su saldo es: <Suma id= {props.id}/></h2>
        </div>
    )
}

export default Encabezado;