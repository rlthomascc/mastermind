/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect,
} from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';

const ls = require('../../utils/storage');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: [],
      goals: [],
      accountability: [],
    };
  }

  componentWillMount() {
    const token = ls.getFromStorage('token');
    if (token) {
      axios.get('/session', { token })
        .then((data) => {
          if (data.data.success === false) {
            this.props.logout();
          }
        })
        .catch(err => console.log(err));
    }
    axios.get('/savings')
      .then((data) => {
        this.setState({
          savings: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
    axios.get('/goal')
      .then((data) => {
        this.setState({
          goals: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
    axios.get('/tasks')
      .then((data) => {
        this.setState({
          accountability: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
  }


  render() {
    const { isLoggedIn } = this.props;
    const { savings, goals, accountability } = this.state;
    if (isLoggedIn === true) {
      return (
        <div>
          <Homepage
            active={this.props.active}
            changeActive={this.props.changeActive}
            savings={savings}
            goals={goals}
            todo={accountability}
          />
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}


export default Home;
