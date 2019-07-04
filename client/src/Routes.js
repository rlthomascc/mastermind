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
import Accountability from './components/Accountability';
import RandyGoals from './userSites/RandyGoals';
import DonGoals from './userSites/DonGoals';
import RandyThomas from './userSites/RandyThomas';
import DonWright from './userSites/DonWright';
import Don10Year from './userGoals/don10Year';
import Don5Year from './userGoals/don5Year';
import Don1Year from './userGoals/don1Year';
import Randy10Year from './userGoals/randy10Year';
import Randy5Year from './userGoals/randy5Year';
import Randy1Year from './userGoals/randy1Year';

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
            path="/forum"
            exact
            strict
            render={props => (
              <Forum isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/randyGoals"
            exact
            strict
            render={props => (
              <RandyGoals isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/donGoals"
            exact
            strict
            render={props => (
              <DonGoals isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/donWright"
            exact
            strict
            render={props => (
              <DonWright isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/randyThomas"
            exact
            strict
            render={props => (
              <RandyThomas isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/don10Year"
            exact
            strict
            render={props => (
              <Don10Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/randy10Year"
            exact
            strict
            render={props => (
              <Randy10Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/don5Year"
            exact
            strict
            render={props => (
              <Don5Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/randy5Year"
            exact
            strict
            render={props => (
              <Randy5Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/don1Year"
            exact
            strict
            render={props => (
              <Don1Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
          <Route
            path="/randy1Year"
            exact
            strict
            render={props => (
              <Randy1Year isLoggedIn={this.props.isLoggedIn} logout={this.props.logout} token={this.props.token} toggleLog={this.props.toggleLog} setToken={this.props.setToken} />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
