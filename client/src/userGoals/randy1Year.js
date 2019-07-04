/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaCheckCircle, FaListOl } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import OneYear from '../modals/OneYear';
import Navbar from '../components/Navbar';

class RandyOneYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      oneYearModal: false,
      goalModal: false,
      savingsModal: false,
      goals: [],
    };
  }

  componentDidMount() {
    axios.get('/oneYear')
      .then((data) => {
        this.setState({
          goals: data.data,
        });
      })
      .catch(err => console.log(err));
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

  openOneYear(e) {
    console.log('open');
    this.setState({
      OneYearModal: true,
      active: e,
    });
  }

  closeOneYear() {
    console.log('close');
    this.setState({ OneYearModal: false });
  }

  deleteOneYear(e) {
    axios.patch('/oneYear', { id: e })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }


  donOneYear() {
    const { active, goals, savings } = this.state;
    return (
      <div className="d-flex flex-row justify-content-center  actionButtons">
        <div className="actionIndividuals">
          <a className="btn btn-info text-light" onClick={() => this.openOneYear('ToDo')}>
            <FaCheckCircle id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New 1 Year Plan
          </a>
        </div>
        <Modal
          visible={this.state.OneYearModal}
          effect="fadeInUp"
          onClickAway={() => this.closeOneYear()}
        >
          <div id="Modal">
            <OneYear close={this.closeOneYear.bind(this)} />
            <a className="text-danger" onClick={() => this.closeOneYear()}>Close</a>
          </div>
        </Modal>

      </div>
    );
  }

  oneYear() {
    const { goals } = this.state;
    return (
      <div className="userGoalContainer">
        {goals.map((elem, i) => {
          if (elem.username === 'Randy Thomas') {
            return (
              <div className="card">
                <h5 className="card-header">{`${elem.username} 1 Year Plan`}</h5>
                <div className="card-body">
                  <p className="card-text">{elem.goal}</p>
                  <a href="#" className="btn btn-danger" onClick={() => this.deleteOneYear(elem._id)}>Delete</a>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="OneYear">
        <Navbar />
        {this.donOneYear()}
        <br />
        <div className="goalHeader">
          <p className="h5 text-center font-weight-bold text-primary">
            Questions to ask yourself.
          </p>
          <p className="text-center OneYearGoalHeader">
            <i>
On this date in (1 year from current year), what does your life look like?
What are you doing?
Where are you living?
Who are you living with?
Do you have pets?
What kind of house are you living in?
What kind of clothes do you wear?
What is your home like?
Your furniture?
Your bed?
What is your career like?
What are you reading?
What are you making?
What excites you?
What is your health Like?
On this date 1 year from now, what does one day look like from waking up to bedtime?
            </i>
          </p>
        </div>
        <br />
        {this.oneYear()}
      </div>
    );
  }
}

export default RandyOneYear;
