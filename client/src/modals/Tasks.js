/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const axios = require('axios');

const Tasks = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.user.value, e.target.task.value, e.target.often.value, e.target.other.value, e.target.date.value);
    axios.post('/tasks', {
      user: e.target.user.value,
      task: e.target.task.value,
      often: e.target.often.value,
      other: e.target.other.value,
      date: e.target.date.value,
    })
      .then(data => console.log(data, 'data'))
      .catch(err => console.log(err));
  };

  return (
    <div className="modalForm text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User</label>
          <select id="user" className="form-control">
            <option selected>Choose...</option>
            {/* make this loop through props */}
            <option>Randy Thomas</option>
            <option>Don Wright</option>
          </select>
        </div>
        <div className="form-group">
          <label>Task</label>
          <input id="task" type="text" className="form-control" placeholder="Enter task here" />
        </div>
        <div className="form-group">
          <label>How Often Do You Want To Be Reminded?</label>
          <select id="often" className="form-control">
            <option selected>Choose...</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Bi-Monthly</option>
            <option>Monthly</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>If Other Specify Time Period</label>
          <input id="other" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input id="date" type="date" className="form-control" placeholder="Enter date here" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Tasks;
