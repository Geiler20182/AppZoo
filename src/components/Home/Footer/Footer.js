import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer font-small blue-grey lighten-5" style = {{'background-color' : '#f5f5f5', 'margin-top' : '2%'}}>
                <div style={{'background-color' : '#72bb53'}}>
                    <div class="container">

                        {/* <!-- Grid row--> */}
                        <div class="row py-4 d-flex align-items-center">
                             {/* <!-- Grid column --> */}
                            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 class="mb-0" style = {{'font-family' : 'Tahoma'}}>Disfruta de una experiencia única al lado de los animales!</h6>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <!-- Footer Links --> */}
                    <div class="container text-center text-md-left mt-5">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3 dark-grey-text">
                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 class="text-uppercase font-weight-bold">Ubicación de Zoológico</h6>
                                <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{'width' : '60px'}}/>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5954736033636!2d-76.55902588524187!3d3.448107597490291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a5d22362f7f1%3A0x2c05ed4ac5063ab3!2sZool%C3%B3gico%20de%20Cali!5e0!3m2!1ses!2sco!4v1605277472844!5m2!1ses!2sco" width="300" height="200" frameborder="0" style={{'border' : '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>

                            {/* <!-- Grid column --> */}
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase font-weight-bold">Links del Zoo</h6>
                                <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{'width' : '60px'}}/>
                                <p>
                                <a class="dark-grey-text" href="#!">http://www.zoologicodecali.com.co/</a>
                                </p>
                                <p>
                                <a class="dark-grey-text" href="#!">Become an Affiliate</a>
                                </p>
                                <p>
                                <a class="dark-grey-text" href="#!">Shipping Rates</a>
                                </p>
                                <p>
                                <a class="dark-grey-text" href="#!">Help</a>
                                </p>
                            </div>

                            {/* <!-- Grid column --> */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase font-weight-bold">Contacto</h6>
                                <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{'width' : '60px'}}/>
                                <p>
                                <i class="fas fa-home mr-3"></i>Cra. 2 west, Cl. 14, Cali, Valle del Cauca</p>
                                <p>
                                <i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p>
                                <i class="fas fa-phone mr-3"></i>+57 24880888</p>
                                <p>
                                <i class="fas fa-print mr-3"></i>036 2458794</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Copyright --> */}
                    <div class="footer-copyright text-center text-black-50 py-3" style = {{'background-color' : '#dadada'}}>© 2020 Copyright:
                        <a class="dark-grey-text" href=""> Zoológico de Cali</a>
                    </div>
            </footer>
        );
    }
}

export default Footer;