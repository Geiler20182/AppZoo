import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion2.css';

class Seccion2 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo1">Animales</h1>
                <p className = "texto1">Texto referente a los animales del zoológico.</p>
                <div className = "row2">
                    <div className = "columna2 a1">
                        <img src = "" width = "80" height = "80" style = {{'border-radius' : '50%'}}/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna2 a2">
                        <img src = "" width = "80" height = "80" style = {{'border-radius' : '50%'}}/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna2 a3">
                        <img src = "" width = "80" height = "80" style = {{'border-radius' : '50%'}}/>
                        <p>Texto del animal</p>
                    </div>
                </div>
                <Link to = "/Mapa"><button className = "boton" style = {{'vertical-align' : 'middle'}}><span>RECORRER ZOOLÓGICO</span></button></Link>
            </div>
        );
    }
}

export default Seccion2;