import React, { Component } from 'react';
import './Seccion1.css';

class Seccion1 extends Component {
    render() {
        return(
            <div className = "row">
                <div className = "columna contenido"> 
                    {/* Pendiente de Cambiar la fuente del título */}
                    <h1 className = "t1">Zoológico de Cali</h1>
                    <h2 style = {{'margin-left': '40px'}}>...</h2>
                    <p style = {{'margin-left': '40px', 'width' : '80%'}}>Esta es la información del Zoológico de Cali. Donde se
                    encuentra un parrafo muy largo solamente para probar los límites de esta parte.</p>
                </div>
                <div className = "columna imgS1">
                    <img src = "" width = "400" height = "400"/>
                </div>
            </div>
        );
    }
}

export default Seccion1;