/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ActionButtons from '../components/ActionButtons';
import RandyChart from '../charts/RandyChart';

const axios = require('axios');


const RandyThomas = (props) => {
  const navLinks = () => (
    <div className="text-center" id="userLinkContainer">
      <a href="#/randy10Year" id="userLinks">10 Year Plan</a>
      <a href="#/randy5Year" id="userLinks">5 Year Plan</a>
      <a href="#/randy1Year" id="userLinks">1 Year Plan</a>
      <a href="#/randyThomas" id="userLinks">Another Link</a>
    </div>
  );


  return (
    <div>
      <Navbar />
      <ActionButtons />
      {navLinks()}
      <RandyChart />
    </div>
  );
};

export default RandyThomas;
