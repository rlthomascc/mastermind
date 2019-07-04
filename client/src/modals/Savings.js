/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const axios = require('axios');


const Savings = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.user.value, e.target.amount.value, e.target.date.value);
    axios.post('/savings', {
      user: e.target.user.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
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
          <label>Amount Saved</label>
          <input id="amount" type="number" className="form-control" placeholder="Enter amount here" />
        </div>
        {/* <div className="form-group">
          <label>Date</label>
          <input id="date" type="date" className="form-control" placeholder="Enter date here" />
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


export default Savings;
