/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ActionButtons from '../components/ActionButtons';
import DonChart from '../charts/DonChart';

const DonWright = props => (
  <div>
    <Navbar />
    <ActionButtons />
    <DonChart />
  </div>
);

export default DonWright;
