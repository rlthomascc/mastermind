import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';

const ls = require('../../utils/storage');


class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = ls.getFromStorage('token');
    console.log(token, 'token initial login');
    axios.get('/session', { token })
      .then((data) => {
        if (data.data.success === true) {
          this.props.toggleLog();
        } else {
          console.log('Token is invalid');
        }
      })
      .catch(err => console.log(err));
  }


  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;

    // axios.post('/newUser', { user, pass })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));

    axios.post('/login', { user, pass })
      .then((data) => {
        console.log(data, 'DATA LOGIN');
        if (data.data.success === true) {
          this.props.setToken(data.data.token);
          this.props.toggleLog();
          ls.setInStorage(data.data.token);
        }
        if (data.data.success === false) {
          alert(data.data.message);
        }
      })
      .catch(err => console.log(err));
  }


  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" id="username" className="form-control" placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter Password" />
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </div>
      );
    }
    return <Redirect to="/home" />;
  }
}


export default Login;
