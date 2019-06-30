/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const axios = require('axios');


const Goal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.user.value, e.target.goal.value, e.target.steps.value, e.target.date.value);
    axios.post('/goal', {
      user: e.target.user.value,
      goal: e.target.goal.value,
      steps: e.target.steps.value,
      date: e.target.date.value,
    })
      .then(data => console.log(data))
      .catch(err => console.log(err, err));
  };

  return (
    <div className="modalForm text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User</label>
          <select id="user" className="form-control" required>
            <option selected>Choose...</option>
            {/* loop through props to make this more uniformed */}
            <option>Randy Thomas</option>
            <option>Don Wright</option>
          </select>
        </div>
        <div className="form-group">
          <label>Goal</label>
          <textarea id="goal" type="text" className="form-control" placeholder="Enter text here" />
        </div>
        <div className="form-group">
          <label>Steps To Achieve Goal</label>
          <textarea id="steps" type="text" className="form-control" placeholder="Enter text here" />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input id="date" type="date" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


export default Goal;
