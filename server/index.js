const express = require('express');
const bodyParser = require('body-parser');
const admin = require('../database/admin');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/newClient', function(req, res) {
  const e = req.body
  newClient.save(e)
  res.send('Data Saving');
});

app.post('/admin', function(req, res){
  const e = req.body
  admin.save(e);
  res.send('Data Saving');
});

app.get('/admin', function(req, res) {
  admin.Admin.find({}).distinct('fullName').exec(function(err, users) {
    res.send(users);
  });
});

app.get('/clients', function(req, res) {
  newClient.Client.find({}).exec(function(err, clients){
    res.send(clients);
  })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

