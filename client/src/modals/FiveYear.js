/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const axios = require('axios');


const FiveYear = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/fiveYear', {
      user: e.target.user.value,
      goal: e.target.goal.value,
    })
      .then(data => console.log(data))
      .catch(err => console.log(err, 'err'));
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
          <label>5 Year Goal</label>
          <textarea id="goal" type="text" className="form-control" placeholder="Enter 5 Year Goal here" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


export default FiveYear;
