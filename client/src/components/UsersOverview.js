/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Navbar from './Navbar';
import ActionButtons from './ActionButtons';

const UsersOverview = () => {
  const randyTable = () => (
    <div className="table">
      <p className="h6 text-center text-success font-weight-bold">Don Wright</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Reminder Term</th>
            <th scope="col">Date Created</th>
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
      <p className="h6 text-center text-success font-weight-bold">Don Wright</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Reminder Term</th>
            <th scope="col">Date Created</th>
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

  const tableFlex = () => (
    <div className="d-flex flex-row ">
      {randyTable()}
      {donTable()}
    </div>
  );

  return (
    <div>
      <Navbar />
      <ActionButtons />
      {tableFlex()}
    </div>
  );
};

export default UsersOverview;
