/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';
import Navbar from './Navbar';
import ForumForm from '../modals/ForumForm';

const axios = require('axios');
const ls = require('../../utils/storage');

class Accountability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      taskModal: false,
      forumForm: [],
      // savings: [],
      forums: [],
      user: '',
    };
  }

  componentDidMount() {
    const token = ls.getFromStorage('token');
    console.log(this.props, 'props');
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
    axios.get('/forum')
      .then((data) => {
        this.setState({
          forums: data.data,
        });
      })
      .catch(err => console.log(err, 'err'));
    axios.get('/session')
      .then((data) => {
        this.setState({
          user: data.data.user[0].username,
        });
      });
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
    axios.post('/forumDelete', { id: e, user: this.state.user })
      .then((data) => {
        console.log(data);
        location.reload();
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


        {forums.map((elem, i) => {
          if (elem.isDeleted === false) {
            return (
              <div className="card">
                <h5 className="card-header">{elem.title}</h5>
                <div className="card-body">
                  <a href={elem.link} target="_blank"><p id="linkPreview" className="card-text"><img className="card-text" src={elem.linkImage} width="600px" /></p></a>
                  <a href={elem.link} target="_blank"><p id="linkPreview" className="card-text text-primary font-weight-bold"><i>{elem.linkTitle === null ? elem.link : elem.linkTitle}</i></p></a>
                  <br />
                  <br />
                  <p className="card-text" id="forumText">{`Description: ${elem.description}`}</p>
                  <p className="card-text" id="forumText">{`- ${elem.username}`}</p>
                  <a className="btn btn-info btn-sm" href={elem.link} target="_blank">{elem.link.length > 1 ? 'Link' : 'N/A'}</a>
                  {' '}
                  <button className="btn btn-danger btn-sm" onClick={() => this.deleteForum(elem._id)}>Delete</button>
                  <br />
                  <br />
                  <p className="card-text text-muted" id="dateCreated">{`Date Created: ${elem.date != null ? elem.date.slice(0, 10) : 'Unknown'}`}</p>
                </div>
              </div>
            );
          }
        })}
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
    if (this.props.isLoggedIn === true) {
      return (
        <div className="forums">
          <Navbar />
          {this.accountability()}
          {this.forums()}
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}

export default Accountability;
