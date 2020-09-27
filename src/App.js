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
      </div>
    );  
  }

  constructor(props) {
    super(props);
  }

}

export default App;
