/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="topNav">
    {console.log(props.active, 'active', props)}
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link" href="#/home">
          Dashboard
            {' '}
          </a>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#/goals" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Goals
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#/randyGoals">Randy's Goals</a>
            <a className="dropdown-item" href="#/donGoals">Don's Goals</a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Users
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#/randyThomas">Randy Thomas</a>
            <a className="dropdown-item" href="#/donWright">Don Wright</a>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/accountability">Accountability</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/forum">Forum</a>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;
