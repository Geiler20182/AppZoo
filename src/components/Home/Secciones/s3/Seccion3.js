import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Seccion3.css';

class Seccion3 extends Component {
    render() {
        return(
            <div className="noticias">
                <h1 className = "titulo2">NOTICIAS</h1>
                <p className = 'texto2'>Aquí encontrarás diferente información sobre las noticias que pasa en nuestro zoológico.</p>
                <div className = "row a3">
                    <div class="card border-success mb-3" >
                        <div class="card-header">NUEVOS ANIMALES EN EL ZOO!</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Noticia</h5>
                            <p class="card-text">El zoológico de Cali ha recibido con las puertas abiertas nuevos animales...</p>
                            <p><Link to = "/">Ver más...</Link></p>
                        </div>
                    </div>
                    <div class="card border-success mb-3" >
                        <div class="card-header">LOS BUHOS</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Noticia</h5>
                            <p class="card-text">Aveces confunden el origen de los buhos, aquí te contamos como fue
                            su origen...</p>
                            <p><Link to = "/">Ver más...</Link></p>
                        </div>
                    </div>
                   <div class="card border-success mb-3" >
                        <div class="card-header">EJEMPLO</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Noticia</h5>
                            <p class="card-text">Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo.</p>
                            <p><Link to = "/">Ver más...</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Seccion3;
