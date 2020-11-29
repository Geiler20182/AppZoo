import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ZooTienda.css';
import imagen from './entradas.PNG';
import imagen1 from './macaco.jpg';
import imagen2 from './camisa.jpg';
import imagen3 from './cuadro.jpg';

class ZooTienda extends Component {
    render() {
        return(
            <div>
                <div className = "row a6">
                    <div className = "col-sm-8">
                        <h1 className = "t6">ZooTienda</h1>
                        <p>...</p>
                        <p>Entrada León! Roarrr. Esta entrada cuenta con todo
                           el plan incluido para los niños que quieran aprender
                           todo a cerca del zoológico.</p>
                        <p className = "p1">1) $16.000 pesos</p>
                        <Link to = "/"><button className = "botonP1"><span>Comprar!</span></button></Link>
                        <p>Entrada Tucán!. Esta entrada cuanta con el plan includio
                           para toda la diversión en familia, es algo zootastico.</p>
                        <p className = "p1">2) $45.000 pesos</p>
                        <Link to = "/"><button className = "botonP2"><span>Comprar!</span></button></Link>
                        <p>Entrada Elefante!. Especialmente hecha para el cómodo e
                           interesante recorrido de las personas más sabías que tiene
                           la familia, porque así como los elefantes nunca olvidan y
                           les debemoso todo.</p>
                        <p className = "p1">3) $55.000 pesos</p>
                        <Link to = "/"><button className = "botonP1"><span>Comprar!</span></button></Link>
                    </div>
                    <div className = "col-sm-4">
                        <img src = {imagen} width = "450" height = "450" className = "imagenP"/>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h1 className = "t1p">Zoo Productos</h1>
                    <div className = "row secZ">
                        <div className = "col te">
                            <Link><img src = {imagen1} className = "imagen1P"/></Link>
                            <h2 style = {{'font-weight' : 'bold'}}>Peluches</h2>
                            <p>Conoce nuestra sección de peluches.</p>
                        </div>
                        <div className = "col te">
                            <Link><img src = {imagen2} className = "imagen1P"/></Link>
                            <h2 style = {{'font-weight' : 'bold'}}>Camisetas</h2>
                            <p>Conoce nuestra sección de camisetas.</p>
                        </div>
                        <div className = "col te">
                            <Link><img src = {imagen3} className = "imagen1P"/></Link>
                            <h2 style = {{'font-weight' : 'bold'}}>Cuadros</h2>
                            <p>Conoce nuestra sección de cuadros.</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h1 className = "t2p">Cursos Fundación Zoológico de Cali</h1>
                    <div className = "row a78">
                        <div class="card border-success mb-3 c1">
                            <div class="card-header">CURSOS</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Curso de Cuidador</h5>
                                <p class="card-text">El zoológico de cali abre las puertas a las personas que se interesan no 
                                solamente por aprender de los animales, sino de como cuidarlos, mantenerlos y hacer que tengan
                                una vida digna en las mejores condiciones.</p>
                                <p class="card-text">Por eso, la fundación Zoológico de Cali ofrece el curso para aquellas personas
                                que quieren que los animales y desean conocer sus hábitos y velar por su cuidado.</p>
                                <p><Link>Ver más...</Link></p>
                            </div>
                        </div>
                        <div class="card border-success mb-3 c1">
                            <div class="card-header">CURSOS</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Curso de sabiduría animal</h5>
                                <p class="card-text">El zoológico de Cali te invita a que si amas a los animales aprendas de 
                                ellos, como su especie, su comida, su comportamiento, entre otros. De esta manera, puedes entender 
                                mejor el mundo animal y conocer todo sobre las distintas especies que están dentro del zoológico.</p>
                                <p class="card-text">Ven y adentrate de uno de los cursos más importantes que tenemos como 
                                fundación, en la cual podrás explorar un mundo nuevo con los animales y entender como es el 
                                comportamiento.</p>
                                <p><Link>Ver más...</Link></p>
                            </div>
                        </div>
                        <div class="card border-success mb-3 c1" >
                            <div class="card-header">CURSOS</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Curso de cuidado forestal</h5>
                                <p class="card-text">Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo Ejemplo.</p>
                                <p><Link>Ver más...</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>

            </div>
        );
    }
}

export default ZooTienda;