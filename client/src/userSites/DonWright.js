/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ActionButtons from '../components/ActionButtons';
import DonChart from '../charts/DonChart';

const DonWright = (props) => {
  const navLinks = () => (
    <div className="text-center" id="userLinkContainer">
      <a href="#/don10Year" id="userLinks">10 Year Plan</a>
      <a href="#/don5Year" id="userLinks">5 Year Plan</a>
      <a href="#/don1Year" id="userLinks">1 Year Plan</a>
      <a href="#/donWright" id="userLinks">Another Link</a>
    </div>
  );

  return (
    <div>
      <Navbar />
      <ActionButtons />
      {navLinks()}
      <DonChart />
    </div>
  );
};
export default DonWright;
