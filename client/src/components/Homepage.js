/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import DashboardChart from '../charts/DashboardChart';
import Navbar from './Navbar';
import ActionButtons from './ActionButtons';


const Homepage = (props) => {
  const randyTodo = [];
  const donTodo = [];
  const randyGoal = [];
  const donGoal = [];
  props.todo.map((elem, i) => {
    if (elem.username === 'Don Wright' && elem.isCompleted === false) {
      donTodo.push(elem);
    } else if (elem.username === 'Randy Thomas' && elem.isCompleted === false) {
      randyTodo.push(elem);
    }
  });
  props.goals.map((elem, i) => {
    if (elem.username === 'Don Wright' && elem.isCompleted === false) {
      donGoal.push(elem);
    } else if (elem.username === 'Randy Thomas' && elem.isCompleted === false) {
      randyGoal.push(elem);
    }
  });
  const randyTodoTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Randy Thomas TODOS</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Todo</th>
          </tr>
        </thead>
        <tbody>
          {randyTodo.map((elem, i) => (
            <tr key={i++}>
              <th scope="row">{i++}</th>
              <td>{elem.username}</td>
              <td>{elem.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const donTodoTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Don Wright TODOS</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Todo</th>
          </tr>
        </thead>
        <tbody>
          {donTodo.map((elem, i) => (
            <tr key={i++}>
              <th scope="row">{i++}</th>
              <td>{elem.username}</td>
              <td>{elem.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const donGoalsTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Don Wright Goals</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {donGoal.map((elem, i) => (
            <tr key={i++}>
              <td>{i++}</td>
              <td>{elem.username}</td>
              <td>{elem.goal}</td>
              <td>{elem.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const randyGoalsTable = () => (
    <div className="table">
      <p className="font-weight-bold text-center text-success">Randy Thomas Goals</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {randyGoal.map((elem, i) => (
            <tr key={i++}>
              <td>{i++}</td>
              <td>{elem.username}</td>
              <td>{elem.goal}</td>
              <td>{elem.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const flexTodoTables = () => (
    <div className="d-flex flex-row">
      {randyTodoTable()}
      {donTodoTable()}
    </div>
  );

  const flexGoalTables = () => (
    <div className="d-flex flex-row">
      {randyGoalsTable()}
      {donGoalsTable()}
    </div>
  );

  return (
    <div>
      <Navbar active={props.active} changeActive={props.changeActive} />
      <ActionButtons />
      <DashboardChart />
      {flexTodoTables()}
      {flexGoalTables()}
    </div>
  );
};

export default Homepage;
