import React, { Component } from 'react'
import Animals from '../Animals/Animals'
import { Link, Router } from 'react-router-dom';

class Navbar extends Component {
    
    render() {

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <Link to='/'>
                            ZooTienda
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to='/Animals'>
                                        Animales
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to='/'>
                                        ZooTienda
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to='/'>
                                        ¿Quienes somos?
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to='/'>
                                        Ayuda
                                    </Link>
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesion</button>
                        </form>
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