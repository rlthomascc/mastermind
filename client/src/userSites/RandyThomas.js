/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ActionButtons from '../components/ActionButtons';
import RandyChart from '../charts/RandyChart';

const axios = require('axios');


class RandyThomas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: [],
      goals: [],
    };
  }

  componentDidMount() {
    const savings = [];
    const goals = [];
    axios.get('/savings')
      .then((data) => {
        data.data.map((elem) => {
          if (elem.username === 'Randy Thomas') {
            savings.push(elem);
          }
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({
          savings,
        });
      });
    axios.get('/goal')
      .then((data) => {
        data.data.map((elem) => {
          if (elem.username === 'Randy Thomas') {
            goals.push(elem);
          }
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({
          goals,
        });
      });
  }

  deleteTask(e) {
    axios.patch('/savings', { id: e })
      .then(data => location.reload())
      .catch(err => console.log(err));
  }

  savingsTable() {
    const { goals, savings } = this.state;
    return (
      <div className="userTables">
        <p className="h6 text-center text-success font-weight-bold">Randy Savings</p>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Savings Amount</th>
              <th scope="col">Date</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {savings.map((elem, i) => (
              <tr key={i++}>
                <td className={elem.isCompleted === true ? 'table-success' : ''}>{i++}</td>
                <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.username}</td>
                <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.amount}</td>
                <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.Date.substring(0, 10)}</td>
                <td className={elem.isCompleted === true ? 'table-success' : ''}>
                  <button className="btn btn-sm btn-danger text-light" onClick={() => this.deleteTask(elem._id)}>Delete</button>
                  {' '}
                  {' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  navLinks() {
    return (
      <div className="text-center" id="userLinkContainer">
        <a href="#/randy10Year" id="userLinks">10 Year Plan</a>
        <a href="#/randy5Year" id="userLinks">5 Year Plan</a>
        <a href="#/randy1Year" id="userLinks">1 Year Plan</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <ActionButtons />
        {this.navLinks()}
        <RandyChart />
        {this.savingsTable()}
        <hr />
      </div>
    );
  }
}

export default RandyThomas;
