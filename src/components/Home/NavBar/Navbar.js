import React, { Component } from 'react'
import Animals from '../../Animals/Animals'
import { Link, Router } from 'react-router-dom';
import './Navbar.css'
import imagen from './bolsa-de-la-compra.png';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light fondo">
                    <a className="navbar-brand" style = {{'margin-right' : '32%', 'font-size' : '25px'}}>
                        <Link className = "links" to='/'>
                            INICIO
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style = {{'font-size' : '22px'}}>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link className = "links" to='/Animals'>
                                        Animales
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link className = "links" to='/Who'>
                                        ¿Quienes somos?
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link className = "links" to='/'>
                                        Mapa
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link className = "links" to='/'>
                                        Ayuda
                                    </Link>
                                </a>
                            </li>
                        </ul>
                        <div>
                            <Link to='/ZooTienda'><img className = "imagenT" src = {imagen} width = "40" height = "40"/></Link>
                        </div>
                        {/*<Link><button className = "boton1"><span>Sign In</span></button></Link>*/}
                    </div>
                </nav>
            </React.Fragment>
        );
    }

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('Did mount!');
    }

    componentDidUpdate() {
        console.log('Did update');
    }
    
    componentWillUnmount() {
        console.log('Will unmount');
    }
}

export default Navbar;