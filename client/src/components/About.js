/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Navbar from './Navbar';


const About = props => (
  <div>
    <Navbar />
    <div className="about">
      <p>
This is the about me section. This is where all information regarding
        {' '}
        <br />
      our mission will go. It will give a brief description about what our goals are and what
        {' '}
        <br />
      we stand by, to remind us why were putting ourselves through the ringer.
        <br />
        <br />
        <br />

      Insert Quote Here

      </p>

    </div>
  </div>
);

export default About;
