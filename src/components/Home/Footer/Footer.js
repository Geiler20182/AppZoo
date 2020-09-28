import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer font-small indigo" style = {{'background-color' : ' #e1e2e1'}}>
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        </div>

                        <hr class="clearfix w-100 d-md-none"/>

                        <div class="col-md-3 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Dirección</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Dirección 1</a>
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
                                    <a href="#!">3206481025</a>
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
                                    <a href="#!">Link 1</a>
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

            <div class="footer-copyright text-center py-3" style = {{'background-color' : ' #a9aaa9'}}>© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>

            </footer>
        );
    }
}

export default Footer;