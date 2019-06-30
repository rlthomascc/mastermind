/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { FaBullseye, FaMoneyBillAlt, FaListOl } from 'react-icons/fa';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import Goal from '../modals/Goal';
import ToDo from '../modals/ToDo';
import Savings from '../modals/Savings';

class ActionNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
      ToDoModal: false,
      goalModal: false,
      savingsModal: false,
      goals: [],
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

  opengoal(e) {
    console.log('open');
    this.setState({
      goalModal: true,
      active: e,
    });
  }

  closegoal() {
    console.log('close');
    this.setState({ goalModal: false });
  }

  openToDo(e) {
    console.log('open');
    this.setState({
      ToDoModal: true,
      active: e,
    });
  }

  closeToDo() {
    console.log('close');
    this.setState({ ToDoModal: false });
  }

  opensavings(e) {
    console.log('open');
    this.setState({
      savingsModal: true,
      active: e,
    });
  }

  closesavings() {
    console.log('close');
    this.setState({ savingsModal: false });
  }

  actionNav() {
    const { active, goals, savings } = this.state;
    return (
      <div className="d-flex flex-row justify-content-center  actionButtons">
        <div className="actionIndividuals">
          <a className="btn btn-warning text-light" onClick={() => this.opensavings('savings')}>
            <FaMoneyBillAlt id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New Savings
          </a>
        </div>
        <br />
        <div className="actionIndividuals">
          <a className="btn btn-success" href="#/home" onClick={() => this.opengoal('New goal')}>
            <FaBullseye id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New Goal
          </a>
        </div>
        <br />
        <div className="actionIndividuals">
          <a className="btn btn-info text-light" href="#/home" onClick={() => this.openToDo('ToDo')}>
            <FaListOl id="icon" size={25} id="icon" className="text-light" />
            {' '}
              New To Do
          </a>
        </div>
        <Modal
          visible={this.state.ToDoModal}
          effect="fadeInUp"
          onClickAway={() => this.closeToDo()}
        >
          <div id="Modal">
            <ToDo close={this.closeToDo.bind(this)} />
            <a className="text-danger" onClick={() => this.closeToDo()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.goalModal}
          effect="fadeInUp"
          onClickAway={() => this.closegoal()}
        >
          <div id="Modal">
            <Goal close={this.closegoal.bind(this)} />
            <a className="text-danger" onClick={() => this.closegoal()}>Close</a>
          </div>
        </Modal>

        <Modal
          visible={this.state.savingsModal}
          effect="fadeInUp"
          onClickAway={() => this.closesavings()}
        >
          <div id="Modal">
            <Savings close={this.closeToDo.bind(this)} />
            <a className="text-danger" onClick={() => this.closesavings()}>Close</a>
          </div>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      this.actionNav()
    );
  }
}

export default ActionNav;
