
import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAnimal } from '../../actions/animal';

class AnimalCard extends Component {


    render () {

        return (
            <div className="column">
                <div className="box">
                <div>
                    <div className="slide-img">
                    <img src={this.props.animal.src} alt="1"/>
                    <div className="overlay">
                    <Link  className="buy-btn" onClick = {this.onAnimalCardSelect}
                        to = '/Animal' 
                        >
                        Saber más!
                    </Link>
                    </div>
                    </div>
                    <div className="detail-box"></div>
                    <div className="type">
                    <a href="#" >{this.props.animal.title}</a>
                        <span>{this.props.animal.leyenda}</span>
                    </div>
                </div>
                </div>
           </div>
        );
    }

    constructor(props) {
        super(props);
        //console.log(this.props);
        this.onAnimalCardSelect = this.onAnimalCardSelect.bind(this);
    }

    onAnimalCardSelect() {
        this.props.setAnimal(this.props.animal);
        
        //this.props.onAnimalSelect(this.props.animal);
    
    }

}

const mapStateToActions = {
    setAnimal
};

export default connect(null, mapStateToActions )(AnimalCard);