import React, { Component } from 'react';
import './Seccion2.css';

class Seccion2 extends Component {
    render() {
        return(
            <div>
                <h1 className = "t1">Animales</h1>
                <p className = "texto1">Texto referente a los animales.</p>
                <div className = "row">
                    <div className = "columna a1">
                        <img src = "" width = "20" height = "20"/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna a2">
                        <img src = "" width = "20" height = "20"/>
                        <p>Texto del animal</p>
                    </div>
                    <div className = "columna a3">
                        <img src = "" width = "20" height = "20"/>
                        <p>Texto del animal</p>
                    </div>
                </div>
                <button></button>
            </div>
        );
    }
}

export default Seccion2;