import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, Route, HashRouter, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        axios.get('/session', {token: this.props.token})
        .then((data) => {
            if (data.data.success === false) {
                console.log(data, 'DATA BACK')
                console.log(this.props, 'props')
                this.props.logout();
            }
        })
        .catch((err) => console.log(err));
    }


    render() { 
        const {isLoggedIn} = this.props
        console.log(isLoggedIn, 'isloggedin', this.props, 'props')
        if (isLoggedIn === true) {
            return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
    return <Redirect to="/" />
    }
}
 

export default Home