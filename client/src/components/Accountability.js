/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaTasks } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import Navbar from './Navbar';
import Tasks from '../modals/Tasks';

const axios = require('axios');

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      tasks: [],
      // savings: [],
    };
  }

  componentDidMount() {
    axios.get('/tasks')
      .then((data) => {
        this.setState({
          tasks: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
  }

  setActive(e) {
    this.setState({
      active: e,
    });
  }

  setActiveDrop(e) {
    this.setState({
      active: e,
    });
  }

  opentask(e) {
    console.log('open');
    this.setState({
      taskModal: true,
      active: e,
    });
  }

  closetask() {
    console.log('close');
    this.setState({ taskModal: false });
  }


  accountability() {
    return (
      <div>
        <div className="taskButton text-center">
          <a className="btn btn-info text-light" href="#/accountability" onClick={() => this.opentask('New task')}>
            <FaTasks id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New Task
          </a>
        </div>
        <Modal
          visible={this.state.taskModal}
          effect="fadeInUp"
          onClickAway={() => this.closetask()}
        >
          <div id="Modal">
            <Tasks close={this.closetask.bind(this)} />
            <a className="text-danger" onClick={() => this.closetask()}>Close</a>
          </div>
        </Modal>
      </div>
    );
  }

  donsList() {
    const { tasks } = this.state;
    const donTasks = [];
    console.log(tasks);
    tasks.map((elem, i) => {
      if (elem.username === 'Don Wright') {
        donTasks.push(elem);
      }
      console.log('nope');
    });
    console.log(donTasks);
    return (
      <div className="accountabilityTables">
        <p className="h6 text-center text-success font-weight-bold">Don Wright</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Task</th>
              <th scope="col">Reminder Term</th>
              <th scope="col">Specified Reminder</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {donTasks.map((elem, i) => (
              <tr key={i++}>
                <td>{i++}</td>
                <td>{elem.username}</td>
                <td>{elem.task}</td>
                <td>{elem.often}</td>
                <td>{elem.other}</td>
                <td>
                  <button className="btn btn-sm btn-success text-light">Complete</button>
                  {' '}
                  {' '}
                  <button className="btn btn-sm btn-primary text-light">Edit</button>
                  {' '}
                  {' '}
                  <button className="btn btn-sm btn-danger text-light">Delete</button>
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

  randyList() {
    const { tasks } = this.state;
    const randyTasks = [];
    console.log(tasks);
    tasks.map((elem, i) => {
      if (elem.username === 'Randy Thomas') {
        randyTasks.push(elem);
      }
      console.log('nope');
    });
    console.log(randyTasks);
    return (
      <div className="accountabilityTables">
        <p className="h6 text-center text-success font-weight-bold">Randy Thomas</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Task</th>
              <th scope="col">Reminder Term</th>
              <th scope="col">Specified Reminder</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {randyTasks.map((elem, i) => (
              <tr key={i++}>
                <td>{i++}</td>
                <td>{elem.username}</td>
                <td>{elem.task}</td>
                <td>{elem.often}</td>
                <td>{elem.other}</td>
                <td>
                  <button className="btn btn-sm btn-success text-light">Complete</button>
                  {' '}
                  {' '}
                  <button className="btn btn-sm btn-primary text-light">Edit</button>
                  {' '}
                  {' '}
                  <button className="btn btn-sm btn-danger text-light">Delete</button>
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

  render() {
    return (
      <div>
        <Navbar />
        {this.accountability()}
        {this.donsList()}
        {this.randyList()}
      </div>
    );
  }
}

export default Accountability;
