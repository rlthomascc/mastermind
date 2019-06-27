import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      token: '',
      active: 'dashboard',
    };
  }

  toggleLog(e) {
    this.setState({
      isLoggedIn: true,
    });
  }

  logout(e) {
    this.setState({
      isLoggedIn: false,
    });
  }

  setToken(e) {
    this.setState({
      token: e,
    });
  }

  renderView() {
    const { isLoggedIn, token, active } = this.state;
    return <Routes isLoggedIn={isLoggedIn} logout={this.logout.bind(this)} token={token} toggleLog={this.toggleLog.bind(this)} setToken={this.setToken.bind(this)} />;
  }

  render() {
    return (
      this.renderView()
    );
  }
}

export default App;
