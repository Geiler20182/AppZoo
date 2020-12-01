import React, { Component } from 'react';
import './Animals.css';
import AnimalDescripton from './AnimalDescription';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AnimalCard from './AnimalCard';
import { connect } from 'react-redux';
import { setAnimal, setCategory, setCategory1} from '../../actions/animal';
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

            <div className="contenedorAnimal">
              <br/>
              <br/>

              <div className="row_cat">
                {/*
                  Las categorias se establecieron de la sgte manera:
                  0 : todos (Por defecto en el almacen)
                  1 : Anfibios
                  2 : Aves
                  3 : Mamiferos
                  4 : Peces
                  5 : Reptiles
                */}
                {/* Cambiar icono */}

                <Link className="category" onClick={() => this.props.setCategory1()} to = {`/Animals`}>
                  <img src={Mamifero} />
                  <h2>Todos</h2>
                </Link>

                <Link className="category" onClick={() => this.props.setCategory(1)} to = '/Animals'>
                  <img src={Anfibio} />
                  <h2>Anfibios</h2>
                </Link>

                <Link className="category" onClick={() => this.props.setCategory(2)} to = '/Animals'>
                  <img src={Ave} />
                  <h2> Aves</h2>
                </Link>

                <Link className="category" onClick={() => this.props.setCategory(3)} to = '/Animals'>
                  <img src={Mamifero} />
                  <h2>Mamiferos</h2>
                </Link>

                <Link className="category" onClick={() => this.props.setCategory(4)} to = '/Animals'>
                  <img src={Pez} />
                  <h2>Peces</h2>
                </Link>

                <Link className="category" onClick={() => this.props.setCategory(5)} to = '/Animals'>
                  <img src={Reptil} />
                  <h2>Reptiles</h2>
                </Link>
              </div>

              <div className="row_card">

                  {this.props.animals.map(animal => {

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
      this.state = {
        category : 0
      }
      console.log(this.props);
      this.animalSelected =  this.animalSelected.bind(this);
    }

    onAnimalCardSelect() {

    }

    componentDidMount() {
      this.props.setCategory1();
      console.log('Did mount! yey');
      console.log(this.props.id_category);
    }

    componentDidUpdate() {
      console.log(this.props.animals);
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

const mapActionToProps = {setCategory, setCategory1}

const mapStoreToProps = (state) => {
  return {
    animals : state.animal.animals,
    category : state.animal.id_category
  }
}

export default connect( mapStoreToProps, mapActionToProps)(Animals);
