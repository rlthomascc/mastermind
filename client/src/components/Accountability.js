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

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      tasks: [],
      savings: [],
    };
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
    const { tasks } = this.state;
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
    return (
      <div className="accountabilityTables">
        <p className="h6 text-center text-success font-weight-bold">Don Wright</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Reminder Term</th>
              <th scope="col">Date Created</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
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
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
          </tbody>
        </table>
      </div>
    );
  }

  randyList() {
    return (
      <div className="accountabilityTables">
        <p className="h6 text-center text-success font-weight-bold">Randy Thomas</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Reminder Term</th>
              <th scope="col">Date Created</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
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
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
