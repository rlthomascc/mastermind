const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

let app = express();

//COMPARISON ALGORITHM (new Date().getTime() + (1 * 2 * 60 * 60 * 1000))

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
      db.saveSession({
        username: req.body.user,
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

app.get('/session', (req, res) => {
  db.Session.find({token: req.body.token}).exec((err, data) => {
    if (data.length < 1) {
      res.send({
        success: false,
        message: 'Invalid Token'
      })
    } else if (data[0]._doc.isDeleted === false) {
      if (data[0]._doc.timeStamp < (new Date().getTime() + (1 * 2 * 60 * 60 * 1000))) {
        res.send({
          success: true,
          message: 'Valid Token',
        })
      } else {
        db.Session.findOneAndUpdate({
          timeStamp: data[0]._doc.timeStamp,
          isDeleted: false,
        }, {
          $set: {
            isDeleted: true,
          },
        }, null, (err, sessions) => {
          if (err) {
            res.send({
              success: false,
              message: 'Error: Server error!',
            });
          }
          res.send({
            success: true,
            message: 'Updated Token',
          });
        });
      }
    } else if (data[0]._doc.isDeleted === true) {
      res.send({
        success: false,
        message: 'Expired Token',
      })
    }
  })
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
