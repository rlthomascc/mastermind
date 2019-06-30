/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ActionButtons from './ActionButtons';
import Navbar from './Navbar';


const GoalOverview = (props) => {
  const randyTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Randy Thomas</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const donTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Don Wright</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const flexTables = () => (
    <div className="d-flex flex-row">
      {randyTable()}
      {donTable()}
    </div>
  );

  return (
    <div>
      <Navbar />
      <ActionButtons />
      {flexTables()}
    </div>
  );
};

export default GoalOverview;
