import React, { Component } from 'react';
import './Mapa.css';
import mapa_zoo from './sub_mapas/mapa_principal.jpg'
class Mapa extends Component {
    render() {
        return(
            <div className="mapa_zoo">
                <div>
                    <h1>Mapa</h1>
                    <img src = {mapa_zoo} />
                </div>
            </div>
        );
    }
}

export default Mapa;
