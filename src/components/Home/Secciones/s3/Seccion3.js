import React, { Component } from 'react';
import './Seccion3.css';

class Seccion3 extends Component {
    render() {
        return(
            <div>
                <h1 className = "titulo2">NOTICIAS</h1>
                <p className = 'texto2'>Información adicional</p>
                <div className = "row">
                    <div class="card border-success mb-3" style={{"max-width": "18rem", "margin-right" : "140px", "margin-left" : "210px"}}>
                        <div class="card-header">N1</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-success mb-3" style={{"max-width": "18rem", "margin-right" : "140px"}}>
                        <div class="card-header">N2</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card border-success mb-3" style={{"max-width": "18rem"}}>
                        <div class="card-header">N3</div>
                        <div class="card-body text-success">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Seccion3;