import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion2.css';
import imagen1 from './acuaticos.png';
import imagen2 from './terrestres.png';
import imagen3 from './aves.png'

class Seccion2 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo1">Animales</h1>
                <p className = "texto1">Visita nuestro mapa del zoológico para encontrar diferentes animales!</p>
                <div className = "row s2r">
                    <div className = "col s2p1">
                        <Link to = "/"><img src = {imagen1} width = "80" height = "80" style = {{'border-radius' : '50%'}}/></Link>
                        <p>Acuáticos</p>
                    </div>
                    <div className = "col s2p2">
                        <Link to = "/"><img src = {imagen2} width = "80" height = "80" style = {{'border-radius' : '50%'}}/></Link>
                        <p>Terrestres</p>
                    </div>
                    <div className = "col s2p3">
                        <Link to = "/"><img src = {imagen3} width = "80" height = "80" style = {{'border-radius' : '50%'}}/></Link>
                        <p>Aves</p>
                    </div>
                </div>
                <Link to = "/Mapa"><button className = "boton" style = {{'vertical-align' : 'middle'}}><span>RECORRER ZOOLÓGICO</span></button></Link>
            </div>
        );
    }
}

export default Seccion2;