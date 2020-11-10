import React, { Component } from 'react';
import './Animals.css';
import AnimalDescripton from './AnimalDescription';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AnimalCard from './AnimalCard';
import { connect } from 'react-redux';
import { setAnimal, setCategory } from '../../actions/animal';
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
                <Link className="category" onClick={() => this.setCategory(0)} to = {`/Animals`}>
                  <img src={Mamifero} />
                  <h2>Todos</h2>
                </Link>

                <Link className="category" onClick={() => this.setCategory(1)} to = '/Animals'>
                  <img src={Anfibio} />
                  <h2>Anfibios</h2>
                </Link>

                <Link className="category" onClick={() => this.setCategory(2)} to = '/Animals'>
                  <img src={Ave} />
                  <h2> Aves</h2>
                </Link>

                <Link className="category" onClick={() => this.setCategory(3)} to = '/Animals'>
                  <img src={Mamifero} />
                  <h2>Mamiferos</h2>
                </Link>

                <Link className="category" onClick={() => this.setCategory(4)} to = '/Animals'>
                  <img src={Pez} />
                  <h2>Peces</h2>
                </Link>

                <Link className="category" onClick={() => this.setCategory(5)} to = '/Animals'>
                  <img src={Reptil} />
                  <h2>Reptiles</h2>
                </Link>

              </div>
              <div className="row_card">

                  {this.props.animals.filter(animal => (animal.id_category == this.state.category || this.state.category == 0) ).map( (animal) => {

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
      this.setCategory = this.setCategory.bind(this);
      // this.setCategory0 = this.setCategory0.bind(this);
      // this.setCategory1 = this.setCategory1.bind(this);
      // this.setCategory2 = this.setCategory2.bind(this);
      // this.setCategory3 = this.setCategory3.bind(this);
      // this.setCategory4 = this.setCategory4.bind(this);
      // this.setCategory5 = this.setCategory5.bind(this);
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

    // Modificar esto

    setCategory(numero){
      console.log(numero);
      this.setState({category : numero});
    }

    // setCategory0() {
    //   console.log("Todos");
    //   this.setState({category :  0});

    // }
    // setCategory1() {
    //   console.log("Anfibios");
    //   this.setState({category :  1});
    // }
    // setCategory2() {
    //   console.log("Aves");
    //   this.setState({category :  2});
    // }
    // setCategory3() {
    //   console.log("Mamiferos");
    //   this.setState({category : 3});
    // }
    // setCategory4() {
    //   console.log("Peces");
    //   this.setState({category :  4});
    // }
    // setCategory5() {
    //   console.log("Reptiles");
    //   this.setState({category :  5});
    // } 


    animalSelected(animal) {
      console.log('Recibiendo un animal de animal card', animal)
      this.props.onAnimalSelected(animal);
    }
}

const mapStoreToProps = (state) => {
  return {
    animals : state.animal.animals,
    category : state.animal.id_category
  }
}
export default connect( mapStoreToProps)(Animals);
