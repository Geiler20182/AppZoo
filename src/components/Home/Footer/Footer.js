import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer font-small indigo position-sticky" style = {{'background-color' : ' #e1e2e1', 'margin-top' : '15px'}}>
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Imagen de zoológico</h5>
                        </div>

                        <hr class="clearfix w-100 d-md-none"/>

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Dirección</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Cra. 2 west, Cl. 14, Cali, Valle del Cauca</a>
                                </li>
                                <li>
                                    <a href="#!">Dirección 2</a>
                                </li>
                                <li>
                                    <a href="#!">Dirección 3</a>
                                </li>
                                <li>
                                    <a href="#!">Dirección 4</a>
                                </li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none"/>

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Teléfono</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">+57 24880888</a>
                                </li>
                                <li>
                                    <a href="#!">036 2458794</a>
                                </li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none"/>

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Email</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">http://www.zoologicodecali.com.co/</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            <div class="footer-copyright text-center py-3" style = {{'background-color' : ' #a9aaa9'}}>© 2020 Copyright: Zoológico de Cali</div>

            </footer>
        );
    }
}

export default Footer;