import React, { Component } from 'react';
import './Seccion1.css';
import imagen from './zoo.png'

class Seccion1 extends Component {
    render() {
        return(
            <div className = "row">
                <div className = "columna contenido"> 
                    {/* Pendiente de Cambiar la fuente del título */}
                    <h1 className = "t1">Zoológico de Cali</h1>
                    <h2 style = {{'margin-left': '40px'}}>...</h2>
                    <p style = {{'margin-left': '40px', 'width' : '80%'}}>El zoológico de Cali es un parque zoológico 
                        fundado en el año de 1969 ubicado en la ciudad colombiana de Santiago de Cali (Colombia). El parque, 
                        situado dentro del bosque municipal y a orillas del río Cali.</p>
                    <p style = {{'margin-left': '40px', 'width' : '80%'}}>El zoológico de Cali promueve y ejecuta diversos programas educacionales, recreacionales e 
                        investigativos para ayudar a preservar la biodiversidad colombiana y crear conciencia ambiental 
                        entre la sociedad. Cuenta con un área total de 25 Hectáreas, aunque el parque como tal solo cuenta 
                        con 9 hectáreas, y el recorrido es de alrededor de 1,5 kilómetros</p>
                </div>
                <div className = "columna imgS1">
                    <img src = {imagen} width = "430" height = "360"/>
                </div>
            </div>
        );
    }
}

export default Seccion1;