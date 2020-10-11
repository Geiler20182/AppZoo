import React, { Component } from 'react';
import './Who.css';
import imagen from './zoológico-de-cali-1280x720.jpg';
// import videoZoo from './';

class Who extends Component {
    render() {
        return(
            <div>
                <div className = "row">
                    <div className = "columna contenido"> 
                        {/* Pendiente de Cambiar la fuente del título */}
                        <h1 className = "t1">¿Quiénes Somos?</h1>
                        <h2 style = {{'margin-left': '40px'}}>...</h2>
                        <p style = {{'margin-left': '40px', 'width' : '80%'}}>Esta es la información de quién es el Zoológico de Cali. Donde se
                        encuentra un parrafo muy largo solamente para probar los límites de esta parte.</p>
                    </div>
                    <div className = "columna imgS1">
                        <img src = {imagen} width = "430" height = "360"/>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h1 className = "titulo2">Historia del Zoológico</h1>
                    <p className = "contenido2">Información que salva.</p>
                    <img className = "imgS5" src = "" width = "300" height = "300"/>
                </div>
                <hr></hr>
                <div>
                    <h1 className = "titulo3">CaliZoo</h1>
                    <iframe className = "videoZoo" width = "500" height = "500" src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Who;