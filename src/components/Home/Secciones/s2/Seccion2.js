import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion2.css';

class Seccion2 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo1">Animales</h1>
                <p className = "texto1">Texto referente a los animales del zoológico.</p>
                <div className = "row">
                    <div className = "columna a1">
                        <img src = "" width = "80" height = "80" style = {{'border-radius' : '50%'}}/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna a2">
                        <img src = "" width = "80" height = "80" style = {{'border-radius' : '50%'}}/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna a3">
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