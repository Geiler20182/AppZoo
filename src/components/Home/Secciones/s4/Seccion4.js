import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion4.css';

class Seccion4 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo3">ENTRADAS</h1>
                <img src = "" className = "imgS2" width = "450" height = "450"/>
                <div>
                    <Link to = "/ZooTienda"><button className = "boton2"><span>Comprar!</span></button></Link>
                </div>
            </div>
        );
    }
}

export default Seccion4;