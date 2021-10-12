import { Component } from "react";

class Titulo extends Component{
    render(){
        return(
            <thead>
                <tr>
                    <th className="dr">Concepto</th>
                    <th className="dr">Monto</th>
                    <th className="dr">Tipo</th>
                    <th className="dr">Fecha</th>
                    <th className="dr">Categorida</th>
                    <th className="dr"></th>
                    <th className="dr"></th>
                </tr>
            </thead>
        )
    }
}
export default Titulo;