/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaTasks } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import Tasks from '../modals/Tasks';

const axios = require('axios');
const ls = require('../../utils/storage');

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      tasks: [],
      user: '',
      // savings: [],
    };
  }

  componentDidMount() {
    const token = ls.getFromStorage('token');
    if (token) {
      axios.get('/session', { token })
        .then((data) => {
          if (data.data.success === false) {
            this.props.logout();
          }
        })
        .catch(err => console.log(err));
    } else if (token === null) {
      this.props.logout();
    }
    axios.get('/tasks')
      .then((data) => {
        this.setState({
          tasks: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
    axios.get('/session')
      .then((data) => {
        if (data.data.success !== false) {
          this.setState({
            user: data.data.user[0].username,
          });
        }
      })
      .catch(err => console.log(err, 'error'));
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

  deleteTask(e) {
    console.log(e);
    axios.post('/taskDelete', { id: e, user: this.state.user })
      .then((data) => {
        location.reload();
      })
      .catch(err => console.log(err));
  }

  markComplete(e) {
    axios.patch('/tasks', { id: e.id, isCompleted: e.isCompleted, user: this.state.user })
      .then((data) => {
        location.reload();
      })
      .catch(err => console.log(err));
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
        <hr />
        <p className="text-center font-weight-bold">Don Wright</p>
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
            {donTasks.map((elem, i) => {
              if (elem.isDeleted === false) {
                return (
                  <tr key={i++}>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{i++}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.username}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.task}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.often}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.other}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>
                      <button className={elem.isCompleted === false ? 'btn btn-sm btn-success text-light' : 'btn btn-sm btn-warning text-dark'} onClick={() => this.markComplete({ id: elem._id, isCompleted: elem.isCompleted })}>{elem.isCompleted === false ? 'Mark Complete' : 'Mark Incomplete'}</button>
                      {' '}
                      {' '}
                      <button className="btn btn-sm btn-danger text-light" onClick={() => this.deleteTask(elem._id)}>Delete</button>
                      {' '}
                      {' '}
                    </td>
                  </tr>
                );
              }
            })}
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
        <hr />
        <p className="text-center font-weight-bold">Randy Thomas</p>
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
            {randyTasks.map((elem, i) => {
              console.log(elem.isDeleted);
              if (elem.isDeleted === false) {
                return (
                  <tr key={i++}>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{i++}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.username}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.task}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.often}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>{elem.other}</td>
                    <td className={elem.isCompleted === true ? 'table-success' : ''}>
                      <button className={elem.isCompleted === false ? 'btn btn-sm btn-success text-light' : 'btn btn-sm btn-warning text-dark'} onClick={() => this.markComplete({ id: elem._id, isCompleted: elem.isCompleted })}>{elem.isCompleted === false ? 'Mark Complete' : 'Mark Incomplete'}</button>
                      {' '}
                      {' '}
                      <button className="btn btn-sm btn-danger text-light" onClick={() => this.deleteTask(elem._id)}>Delete</button>
                      {' '}
                      {' '}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.props.isLoggedIn === true) {
      return (
        <div>
          <Navbar />
          {this.accountability()}
          <br />
          <br />
          <p className="text-center text-success">
            <i>
            "The benefits and possibilities that are created
              {' '}
              <br />
            by being personally accountable are countless."
              <br />
            - Unknown
            </i>
            {' '}
          </p>
          {this.donsList()}
          {this.randyList()}
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}

export default Accountability;
