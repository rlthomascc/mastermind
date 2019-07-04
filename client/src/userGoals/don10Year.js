/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaCheckCircle, FaListOl } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import TenYear from '../modals/TenYear';
import Navbar from '../components/Navbar';

class DonTenYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      TenYearModal: false,
      goalModal: false,
      savingsModal: false,
      goals: [],
    };
  }

  componentDidMount() {
    axios.get('/tenYear')
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

  openTenYear(e) {
    console.log('open');
    this.setState({
      TenYearModal: true,
      active: e,
    });
  }

  closeTenYear() {
    console.log('close');
    this.setState({ TenYearModal: false });
  }

  deleteTenYear(e) {
    axios.patch('/tenYear', { id: e })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }


  donTenYear() {
    const { active, goals, savings } = this.state;
    return (
      <div className="d-flex flex-row justify-content-center  actionButtons">
        <div className="actionIndividuals">
          <a className="btn btn-info text-light" onClick={() => this.openTenYear('ToDo')}>
            <FaCheckCircle id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New 10 Year Plan
          </a>
        </div>
        <Modal
          visible={this.state.TenYearModal}
          effect="fadeInUp"
          onClickAway={() => this.closeTenYear()}
        >
          <div id="Modal">
            <TenYear close={this.closeTenYear.bind(this)} />
            <a className="text-danger" onClick={() => this.closeTenYear()}>Close</a>
          </div>
        </Modal>

      </div>
    );
  }

  tenYear() {
    const { goals } = this.state;
    return (
      <div className="userGoalContainer">
        {goals.map((elem, i) => {
          if (elem.username === 'Don Wright') {
            return (
              <div className="card">
                <h5 className="card-header">{`${elem.username} 10 Year Plan`}</h5>
                <div className="card-body">
                  <p className="card-text">{elem.goal}</p>
                  <a href="#" className="btn btn-danger" onClick={() => this.deleteTenYear(elem._id)}>Delete</a>
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
      <div className="tenYear">
        <Navbar />
        {this.donTenYear()}
        <br />
        <div className="goalHeader">
          <p className="h5 text-center font-weight-bold text-primary">
            Questions to ask yourself.
          </p>
          <p className="text-center fiveYearGoalHeader">
            <i>
On this date in (10 years from current year), what does your life look like?
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
On this date 10 years from now, what does one day look like from waking up to bedtime?
            </i>
          </p>
        </div>
        <br />
        {this.tenYear()}
      </div>
    );
  }
}

export default DonTenYear;
