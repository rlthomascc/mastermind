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

  deleteForum(e) {
    console.log(e, 'FIRST SENT');
    axios.post('/forumDelete', { id: e })
      .then((data) => {
        console.log(data);
        if (data = 'Forum successfully deleted') {
          location.reload();
        }
      })
      .catch(err => console.log(err));
  }


  forums() {
    const { forums } = this.state;
    return (
      <div>
        <br />
        <br />
        <p className="text-center">
          <i>
          The purpose of this Forum is to showcase inspirational ideas,
            {' '}
            <br />
          books, videos, quotes, and any media source with worthy substance that will
            {' '}
            <br />
          shed light, motivate, or enlighten our brothers.
            {' '}

          </i>

        </p>
        <br />
        <p className="text-center text-warning">
          <i>
          As iron sharpens iron,
            {' '}
            <br />
          so one person sharpens another.
            {' '}
            <br />
          - Proverbs 27:17

          </i>
        </p>


        {forums.map((elem, i) => (
          <div className="card">
            <h5 className="card-header">{elem.title}</h5>
            <div className="card-body">
              <p className="card-text">{`Description: ${elem.description}`}</p>
              <p className="card-text">{`- ${elem.username}`}</p>
              <a className="btn btn-info btn-sm" href={elem.link} target="_blank">{elem.link.length > 1 ? 'Link' : 'N/A'}</a>
              {' '}
              <button className="btn btn-danger btn-sm" onClick={() => this.deleteForum(elem._id)}>Delete</button>
              <br />
              <br />
              <p className="card-text text-muted" id="dateCreated">{`Date Created: ${elem.date != null ? elem.date.slice(0, 10) : 'Unknown'}`}</p>
            </div>
          </div>
        ))}
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
