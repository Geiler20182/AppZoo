import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Ayuda.css';
import imagen1 from './i1.jpg';
import imagen2 from './i2.jpg';

class Ayuda extends Component {
    render() {
        return(
            <div>
                <div className = "a10">
                    <h1 className = "at1">Ayudas al zoológico</h1>
                    <p>La fundación zoológico de cali es una fundación comprometida con la enseñanza, preservación, 
                    ciudado y mantenimiento de los animales que la entidad posee, para lograr cumplir con la misión 
                    se necesita el apoyo de las personas y grandes entidades que apoyen el cuidado de todos los animales 
                    porque juntos, con el compromiso de las personas se puede lograr.</p>
                    <p>Se puede lograr que la vida de la naturaleza se preserve para que los proximas generaciones puedan 
                    aprender de ellas y también las puedan apreciar viéndolas, el futuro de la conservación de las especies 
                    depende de todas las personas.</p>
                </div>
                <div className = "row a11">
                    <div className = "col">
                        <img src = {imagen1} className = "imagenA imgA1"/>
                    </div>
                    <div className = "col">
                        <Link><button className = "botonA1"><span>Ayudar</span></button></Link>
                    </div>
                    <div className = "col">
                        <img src = {imagen2} className = "imagenA imgA2"/>
                        <Link><button className = "botonA2"><span>Ayudar</span></button></Link>
                    </div>
                </div>
                <hr></hr>
                <div>
                <iframe className = "videoZoo" width = "1000" height = "550" src = "https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                </div>
            </div>
        );
    }
}

export default Ayuda;