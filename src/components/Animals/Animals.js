import React, { Component } from 'react';
import './Animals.css';
import AnimalDescripton from './AnimalDescription';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AnimalCard from './AnimalCard';
import { connect } from 'react-redux';
import { setAnimal } from '../../actions/animal';
/* Pruebas 
import animals from './Test';
*/

/* Categorias */

import Anfibio from './categorias/Anfibio.png';
import Ave from './categorias/Ave.png';
import Mamifero from './categorias/Manifero.png';
import Pez from './categorias/Pez.png';
import Reptil from './categorias/Reptil.png';


class Animals extends Component {

    render() {

        return(
            <div>
              <h1>Animales</h1>
              <div className="row_cat">
                {/*<h1>Animales</h1>
                <h2>Categorias</h2>*/}

                <a href="#" className="category">
                  <img src={Anfibio} />
                  <h2>Anfibios</h2>
                </a>

                <a href="#" className="category">
                  <img src={Ave} />
                  <h2> Aves</h2>
                </a>

                <a href="#" className="category">
                  <img src={Mamifero} />
                  <h2>Mamiferos</h2>
                </a>

                <a className="category">
                  <img src={Pez} />
                  <h2>Peces</h2>
                </a>
                <a className="category">
                  <img src={Reptil} />
                  <h2>Reptiles</h2>
                </a>

              </div>
              <div className="row_card">
                  {this.props.animals.map( (animal) => {
                    return ( 
                        <AnimalCard animal = {animal}
                          onAnimalSelect = {this.animalSelected}
                        />
                      )
                    })
                  }
              </div>
            </div>
        );
    }

    constructor(props) {
      super(props);

      console.log(this.props);
      this.animalSelected =  this.animalSelected.bind(this);

    }
    onAnimalCardSelect() {

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
    animalSelected(animal) {
      console.log('Recibiendo un animal de animal card', animal)
      this.props.onAnimalSelected(animal);
    }
}


const mapStoreToProps = (state) => {
  return {
    animals : state.animal.animals
  }
}
export default connect( mapStoreToProps)(Animals);