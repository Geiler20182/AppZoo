import React, { Component } from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Router } from 'react-router-dom';
//import { Route, Switch } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
/* Components */
import Navbar from './components/Home/NavBar/Navbar'
import Animals from './components/Animals/Animals'
import ZooTienda from './components/ZooTienda/ZooTienda'
import Footer from './components/Home/Footer/Footer'
import Seccion1 from './components/Home/Secciones/s1/Seccion1'
import Seccion2 from './components/Home/Secciones/Seccion2'
import Seccion3 from './components/Home/Secciones/Seccion3'
import Seccion4 from './components/Home/Secciones/Seccion4'
import Seccion5 from './components/Home/Secciones/Seccion5'
//import Help from './components/Help'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {

  render() {

    return (

      <div className="">

       <Navbar/>

        <Switch>

          <Route path='/ZooTienda' exact>
            <ZooTienda></ZooTienda>
          </Route>

          <Route path = '/Animals' exact> 
            <Animals/>
          </Route>

          <Route path = '/'> 
          </Route>

        
        </Switch>
       
       <Seccion1></Seccion1>
       <Seccion2></Seccion2>
       <Seccion3></Seccion3>
       <Seccion4></Seccion4>
       <Seccion5></Seccion5>
        
       <Footer/>

      </div>
    );  
  }

  constructor(props) {
    super(props);
  }

}

export default App;
