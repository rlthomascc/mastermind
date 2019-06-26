import React, {Component} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Redirect, Route, HashRouter, Link } from 'react-router-dom';
const ls = require('../../utils/storage');

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const token = ls.getFromStorage('token')
        if (token.length > 1) {
            axios.get('/session', {token: token})
            .then((data) => {
                if (data.data.success === false) {
                    this.props.logout();
                }
            })
            .catch((err) => console.log(err));
        }
    }


    render() { 
        const {isLoggedIn} = this.props
        console.log(ls.getFromStorage('token'), 'TOKEN')
        if (isLoggedIn === true) {
            return (
            <div>
                <Navbar />
            </div>
        );
    }
    return <Redirect to="/" />
    }
}
 

export default Home