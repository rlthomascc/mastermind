/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Route, HashRouter, Redirect, Router,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Forum from './components/Forum';
import GoalOverview from './components/GoalOverview';
import Accountability from './components/Accountability';
import UserOverview from './components/UsersOverview';


class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route
            path="/"
            exact
            render={props => (
              <Login isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/home"
            exact
            strict
            render={props => (
              <Home isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/accountability"
            exact
            strict
            render={props => (
              <Accountability isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/goalsOverview"
            exact
            strict
            render={props => (
              <GoalOverview isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/forum"
            exact
            strict
            render={props => (
              <Forum isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/userOverview"
            exact
            strict
            render={props => (
              <UserOverview isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
