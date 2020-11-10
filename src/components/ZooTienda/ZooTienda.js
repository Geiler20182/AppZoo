import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ZooTienda.css';
import imagen from './entradas.PNG';

class ZooTienda extends Component {
    render() {
        return(
            <div>
                <div className = "row a6">
                    <div className = "col-sm-8">
                        <h1>ZooTienda</h1>
                        <p>Entrada León! Roarrr. Esta entrada cuenta con todo
                           el plan incluido para los niños que quieran aprender
                           todo a cerca del zoológico.</p>
                        <p className = "p1">1) $16.000 pesos</p>
                        <Link to = "/"><button className = "botonP1"><span>Comprar!</span></button></Link>
                        <p>Entrada Tucán!. Esta entrada cuanta con el plan includio
                           para toda la diversión en familia, es algo zootastico.</p>
                        <p className = "p1">2) $45.000 pesos</p>
                        <Link to = "/"><button className = "botonP2"><span>Comprar!</span></button></Link>
                        <p>Entrada Elefante!. Especialmente hecha para el cómodo e
                           interesante recorrido de las personas más sabías que tiene
                           la familia, porque así como los elefantes nunca olvidan y
                           les debemoso todo.</p>
                        <p className = "p1">3) $55.000 pesos</p>
                        <Link to = "/"><button className = "botonP1"><span>Comprar!</span></button></Link>
                    </div>
                    <div className = "col-sm-4">
                        <img src = {imagen} width = "450" height = "450" className = "imagenP"/>
                    </div>
                </div>
                <hr></hr>
                <div className = "row a7">
                    
                </div>
            </div>
        );
    }
}

export default ZooTienda;