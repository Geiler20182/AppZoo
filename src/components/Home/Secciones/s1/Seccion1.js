import React, { Component } from 'react';

class Seccion1 extends Component {
    render() {
        return(
            <div>
                <div clasName = "columna contenido"> 
                    {/* Pendiente de Cambiar la fuente del título */}
                    <h1 className = "t1">Zoológico de Cali</h1>
                    <h2>...</h2>
                    <p>Esta es la información del Zoológico de Cali.</p>
                </div>
                <div className = "columna imgS1">
                    <img src = "" width = "200" height = "200"/>
                </div>
                <br></br>
            </div>
        );
    }
}

export default Seccion1;