import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Routes from './Routes';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        }
    }


    render() {
        return (
            <Routes />
        );
    };
};

export default App;