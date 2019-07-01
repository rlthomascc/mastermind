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

const axios = require('axios');

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      forumForm: [],
      // savings: [],
      forums: [],
    };
  }

  componentDidMount() {
    axios.get('/forum')
      .then((data) => {
        this.setState({
          forums: data.data,
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


  forums() {
    const { forums } = this.state;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {forums.map((elem, i) => (
              <tr key={i++}>
                <td>{i++}</td>
                <td>{elem.username}</td>
                <td>{elem.title}</td>
                <td>{elem.description}</td>
                <td>
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
