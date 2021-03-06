/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const axios = require('axios');

const ForumForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/forum', {
      user: e.target.user.value,
      title: e.target.title.value,
      description: e.target.description.value,
      link: e.target.link.value,
      date: e.target.date.value,
    })
      .then((data) => {
        console.log(data, 'data');
      })
      .catch(err => console.log(err));
    location.reload();
  };

  return (
    <div className="modalForm text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User</label>
          <select id="user" className="form-control" required>
            <option selected>Choose...</option>
            {/* make this loop through props */}
            <option>Randy Thomas</option>
            <option>Don Wright</option>
          </select>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input id="title" type="text" className="form-control" placeholder="Enter title here" required />
        </div>
        <div className="form-group">
          <label>Description / Quote</label>
          <textarea id="description" type="text" className="form-control" placeholder="Enter description here" required />
        </div>
        <div className="form-group">
          <label>Link</label>
          <textarea id="link" type="text" className="form-control" placeholder="Enter Link / URL here" />
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

export default ForumForm;
