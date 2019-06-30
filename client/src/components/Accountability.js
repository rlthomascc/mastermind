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
          <a className="btn btn-success" href="#/accountability" onClick={() => this.opentask('New task')}>
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

  render() {
    return (
      <div>
        <Navbar />
        {this.accountability()}
      </div>
    );
  }
}

export default Accountability;
