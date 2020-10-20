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
class App extends Component {

  render() {

    return (

      <div className="">

        <Navbar></Navbar>

        <Switch>

          <Route path='/ZooTienda' exact>
            <ZooTienda></ZooTienda>
          </Route>

          <Route path = '/Animals' exact> 
            <Animals/>
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
  }

}

export default App;
