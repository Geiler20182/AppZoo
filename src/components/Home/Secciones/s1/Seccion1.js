import React, { Component } from 'react';
import './Seccion1.css';
import imagen from './zoo.png'

class Seccion1 extends Component {
    render() {
        return(
            <div className = "row a1">
                <div className = "col-8 a2">
                    <h1 className = "t1">Zoológico de Cali</h1>
                    <h2>...</h2>
                    <p>El zoológico de Cali es un parque zoológico 
                        fundado en el año de 1969 ubicado en la ciudad colombiana de Santiago de Cali (Colombia). El parque, 
                        situado dentro del bosque municipal y a orillas del río Cali.</p>
                    <p>El zoológico de Cali promueve y ejecuta diversos programas educacionales, recreacionales e 
                        investigativos para ayudar a preservar la biodiversidad colombiana y crear conciencia ambiental 
                        entre la sociedad. Cuenta con un área total de 25 Hectáreas, aunque el parque como tal solo cuenta 
                        con 9 hectáreas, y el recorrido es de alrededor de 1,5 kilómetros</p>
                </div>
                <div className = "col-4"> 
                    <img src = {imagen} width = "450" height = "400" className = "imagen1"/>
                </div>
            </div>
        );
    }
}

export default Seccion1;