
import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAnimal } from '../../actions/animal';

class AnimalCard extends Component {
    render () {
        return (
                <div className="box_card">
                    <div className="slide-img">
                    <img src={this.props.animal.src} alt="1"/>
                    <div className="overlay">
                        {/*to = {`/Animal/${this.props.animal.title}`}*/}
                        <Link  className="buy-btn" onClick = {this.onAnimalCardSelect}
                         to = {`/Animal/${this.props.animal.id}`}>
                        <h>Saber más!</h>
                    </Link>
                    </div>
                    </div>
                    <div className="detail-box"></div>
                    <div className="type">
                    <a href="#" >{this.props.animal.title}</a>
                        <span>{this.props.animal.leyenda}</span>
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
        console.log(this.props.animal)
        console.log(this.props.id_category);
        //this.props.onAnimalSelect(this.props.animal);

    }

}

const mapStateToActions = {
    setAnimal
};

const mapStoreToProps = (state) => {
    return {
      animals : state.animal.animals,
    }
}

export default connect(mapStoreToProps, mapStateToActions )(AnimalCard);
