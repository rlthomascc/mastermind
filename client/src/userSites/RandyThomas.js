/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ActionButtons from '../components/ActionButtons';
import RandyChart from '../charts/RandyChart';

const RandyThomas = props => (
  <div>
    <Navbar />
    <ActionButtons />
    <RandyChart />
  </div>
);

export default RandyThomas;
