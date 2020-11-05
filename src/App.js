import React, { Component } from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Router } from 'react-router-dom';
//import { Route, Switch } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
/* Components */
import Navbar from './components/NavBar/Navbar'
import Animals from './components/Animals/Animals'
import ZooTienda from './components/ZooTienda/ZooTienda'
import Footer from './components/Home/Footer/Footer'
import Seccion1 from './components/Home/Secciones/s1/Seccion1'
import Seccion2 from './components/Home/Secciones/s2/Seccion2'
import Seccion3 from './components/Home/Secciones/s3/Seccion3'
import Seccion4 from './components/Home/Secciones/s4/Seccion4'
import Seccion5 from './components/Home/Secciones/s5/Seccion5'
import Who from './components/About/Who';
import Mapa from './components/Mapa/Mapa';
//import Help from './components/Help'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimalsDescription from './components/Animals/AnimalDescription';

class App extends Component {

  render() {

    return (

      <div className="">

       <Navbar/>
        {/*
         * 
         * 
         <h1>Animales - Mamifero - Ardilla</h1>
         * 
         */}

        <Switch>

          <Route path='/ZooTienda' exact>
            <ZooTienda></ZooTienda>
          </Route>

          <Route path = '/Animals' exact> 
            <Animals onAnimalSelected={this.updateAnimal}/>
          </Route>
          
          <Route path = '/Animal/:idAnimal' exact component = {AnimalsDescription} > 

            {/*<AnimalsDescription animal = {this.state.animal} />*/}
          </Route>

          <Route path = '/Who' exact>
            <Who></Who>
          </Route>

          <Route path = '/' exact>
          <Seccion1></Seccion1>
          <hr></hr>
          <Seccion2></Seccion2>
          <hr></hr>
          <Seccion3></Seccion3>
          <hr></hr>
          <Seccion4></Seccion4>
          <hr></hr>
          <Seccion5></Seccion5> 
          </Route>

          <Route path = '/Mapa' exact>
            <Mapa></Mapa>
          </Route>

        
        </Switch>
        
       <Footer/>

      </div>
    );  
  }
  constructor(props) {
    super(props);
    this.state = {
      animal : {}
    }
    this.updateAnimal = this.updateAnimal.bind(this);
  }

  updateCategory(category) {
    console.log("Actualizando category desde animals, a:", category);
  }
  updateAnimal(animalData) {
    console.log("Recibiendo el animal en app.js", animalData);
    this.setState({animal  :  animalData});
  }
  
}

export default App;
