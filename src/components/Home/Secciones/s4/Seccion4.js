import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion4.css';
import imagen from './entradas.PNG';

class Seccion4 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo3">ENTRADAS</h1>
                <img src = {imagen} className = "entradasI" width = "455" height = "449"/>
                <div>
                    <Link to = "/ZooTienda"><button className = "boton2"><span>Comprar!</span></button></Link>
                </div>
            </div>
        );
    }
}

export default Seccion4;