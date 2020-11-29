import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion5.css';

class Seccion5 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo4">¿Cómo puedes ayudarnos?</h1>
                <p className = "texto4">Esta es la infomación para contribuir con la ayuda del
                   zoológico. Ya que como es una prueba se está midiendo el espacio entre las
                   márgenes de toda la app.</p>
                <Link to = "/Ayuda"><button className = "boton4"><span>Ayudar</span></button></Link>
            </div>
        );
    }
}

export default Seccion5;