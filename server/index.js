const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', function(req, res) {
  db.Login.find({username: req.body.user}).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length < 1) {
      res.send({
        success: false,
        message: 'Account does not exist'
      })
    } else if (req.body.pass === data[0]._doc.password) {
      res.send({
        success: true,
        message: 'Valid sign in',
        token: (data[0]._doc._id).toString()
      })
    } else {
      res.send({
        success: false,
        message: 'Password Invalid'
      })
    }

  })
});


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

