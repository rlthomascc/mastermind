/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';

const ls = require('../../utils/storage');

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = ls.getFromStorage('token');
    if (token.length > 1) {
      axios.get('/session', { token })
        .then((data) => {
          if (data.data.success === false) {
            this.props.logout();
          }
        })
        .catch(err => console.log(err));
    }
  }


  render() {
    const { isLoggedIn } = this.props;
    console.log(ls.getFromStorage('token'), 'TOKEN');
    if (isLoggedIn === true) {
      return (
        <div>
          <Homepage active={this.props.active} changeActive={this.props.changeActive} />
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}


export default Home;
