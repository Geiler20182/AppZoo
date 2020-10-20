
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalsDescription extends Component {


    render () {

        return (

            <div>
                <h1>{this.props.animal.title}</h1>
                <p>{this.props.animal.description}</p>
            </div>

        );
    }

    constructor(props) {
        super(props);
        console.log(this.props);
    }
}

const mapStateToProps = (state) => {
    return {
        animal : state.animal.animal
    }
}
export default connect(mapStateToProps)(AnimalsDescription);