import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Animals extends Component {

    render() {

        return(
            <h5>En proceso</h5>
        );
    }

    constructor(props) {
        super(props);
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
}
export default Animals;