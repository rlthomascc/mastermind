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


  const flexTodoTables = () => (
    <div className="d-flex flex-row">
      {randyTodoTable()}
      {donTodoTable()}
    </div>
  );

  return (
    <div>
      <Navbar active={props.active} changeActive={props.changeActive} />
      <ActionButtons />
      <DashboardChart />
      {flexTodoTables()}
    </div>
  );
};

export default Homepage;
