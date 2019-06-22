/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Login from './components/Login';


class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Login} />
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
