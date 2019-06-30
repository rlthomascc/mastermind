/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import Navbar from './Navbar';
import ForumForm from '../modals/ForumForm';

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      forumForm: [],
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


  forums() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  accountability() {
    const { forumForm } = this.state;
    return (
      <div>
        <div className="taskButton text-center">
          <a className="btn btn-info text-light" href="#/forum" onClick={() => this.opentask('New task')}>
            <FaBookOpen id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New Item
          </a>
        </div>
        <Modal
          visible={this.state.taskModal}
          effect="fadeInUp"
          onClickAway={() => this.closetask()}
        >
          <div id="Modal">
            <ForumForm close={this.closetask.bind(this)} />
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
        {this.forums()}
      </div>
    );
  }
}

export default Accountability;
