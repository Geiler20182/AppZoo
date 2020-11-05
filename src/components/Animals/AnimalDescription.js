
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AnimalDescription.css'
import { getAnimal } from '../../actions/animal'; 
import fondo from './categorias/fondo-description.png';

class AnimalsDescription extends Component {


    render () {

        return (

            <div className="cuadro">
                <div className="description_animal">
                    <div className="card">
                        <div className="Slider">
                            <img src = {this.props.animal.src}></img>
                        </div>
                        <div >
                            <h1>{this.props.animal.title}</h1>
                            
                        </div>
                        <div >
                            <h2>Nombre cientifico</h2> 
                            <p>{this.props.animal.scientific_name} </p>
                            <h2>Descripción</h2>
                            <p>{this.props.animal.description_1}</p>
                            <h2>Dieta</h2>
                            <p>{this.props.animal.description_2}</p>
                            <h2>Reproducción</h2>
                            <p>{this.props.animal.description_3}</p>
                        </div>
                    </div>
                
                </div>
            </div>

        );
    }

    constructor(props) {
        super(props);
       
        console.log(this.props);
    }

    componentDidMount() {

        const idAnimal = this.props.match.params.idAnimal;
        this.props.getAnimal(idAnimal);

        console.log(idAnimal);
    }
}

const mapActionToProps = {getAnimal};

const mapStateToProps = (state) => {

    return {
        animal : state.animal.animal
    }
}
export default connect(mapStateToProps, mapActionToProps)(AnimalsDescription);