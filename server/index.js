const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

// COMPARISON ALGORITHM (new Date().getTime() + (1 * 2 * 60 * 60 * 1000))

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  console.log(req.body, 'LOGIN BODY');
  db.Login.find({ username: req.body.user }).exec((err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length < 1) {
      res.send({
        success: false,
        message: 'Account does not exist',
      });
    } else if (req.body.pass === data[0]._doc.password) {
      res.send({
        success: true,
        message: 'Valid sign in',
        token: (data[0]._doc._id).toString(),
      });
      db.saveSession({
        username: req.body.user,
        token: (data[0]._doc._id).toString(),
      });
    } else {
      res.send({
        success: false,
        message: 'Password Invalid',
      });
    }
  });
});

app.post('/newUser', (req, res) => {
  db.save({
    username: req.body.user,
    password: req.body.pass,
  });
});

app.get('/session', (req, res) => {
  db.Session.find({ token: req.body.token }).exec((err, data) => {
    if (data.length < 1) {
      res.send({
        success: false,
        message: 'Invalid Token',
      });
    } else if (data[0]._doc.isDeleted === false) {
      if (data[0]._doc.timeStamp) {
        res.send({
          success: true,
          message: 'Valid Token',
          user: data,
        });
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
            user: sessions,
          });
        });
      }
    } else if (data[0]._doc.isDeleted === true) {
      res.send({
        success: false,
        message: 'Expired Token',
      });
    }
  });
});

app.patch('/session', (req, res) => {
  console.log(req.body, 'body delete');
  // db.Session.findOneAndUpdate({
  //   userId: req.body.id,
  // }, {
  //   $set: {
  //     isDeleted: true,
  //   },
  // }, null, (err, data) => {
  //   console.log(data, 'DATA BACK');
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.send('Successfully logged out');
  // });
  db.Session.findOneAndRemove({ userId: req.body.id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});


app.post('/forum', (req, res) => {
  console.log(req.body.user, req.body.title, req.body.description, req.body.date);
  db.forumSave({
    username: req.body.user,
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    date: req.body.date,
  });
  console.log('Saved to DB');
});

app.get('/forum', (req, res) => {
  db.Forum.find().sort({ date: 'descending' }).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.post('/forumDelete', (req, res) => {
  console.log(req.body);
  db.Forum.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $set: {
      isDeleted: true,
      changedBy: req.body.user,
    },
  }, null, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send('Successfully deleted');
  });
});

app.post('/tasks', (req, res) => {
  db.tasksSave({
    username: req.body.user,
    task: req.body.task,
    often: req.body.often,
    other: req.body.other,
    date: req.body.date,
  });
  console.log('Saved to DB');
});

app.get('/tasks', (req, res) => {
  db.Tasks.find().sort({ date: -1 }).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/tasks', (req, res) => {
  console.log(req.body);
  if (req.body.isCompleted === false) {
    db.Tasks.findOneAndUpdate({
      _id: req.body.id,
    }, {
      $set: {
        isCompleted: true,
        changedBy: req.body.user,
      },
    }, null, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.send('Successfully changed');
    });
  }
  if (req.body.isCompleted === true) {
    db.Tasks.findOneAndUpdate({
      _id: req.body.id,
    }, {
      $set: {
        isCompleted: false,
        changedBy: req.body.user,
      },
    }, null, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.send('Successfully changed');
    });
  }
});

app.post('/taskDelete', (req, res) => {
  db.Tasks.findOneAndUpdate({
    _id: req.body.id,
  }, {
    $set: {
      isDeleted: true,
      changedBy: req.body.user,
    },
  }, null, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send('Successfully changed');
  });
});


app.post('/savings', (req, res) => {
  db.savingsSave({
    username: req.body.user,
    amount: req.body.amount,
    date: req.body.date,
  });
  console.log('Saved to DB');
});

app.get('/savings', (req, res) => {
  db.Savings.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/savings', (req, res) => {
  db.Savings.findOneAndRemove({ _id: req.body.id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});


app.post('/goal', (req, res) => {
  console.log(req.body.user, req.body.goal, req.body.steps, req.body.date);
  db.goalSave({
    username: req.body.user,
    goal: req.body.goal,
    steps: req.body.steps,
    date: req.body.date,
  });
  console.log('Saved to DB');
});

app.get('/goal', (req, res) => {
  db.Goal.find().sort({ isCompleted: +1 }).exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/goal', (req, res) => {
  console.log(req.body);
  if (req.body.isCompleted === false) {
    db.Goal.findOneAndUpdate({
      _id: req.body.id,
    }, {
      $set: {
        isCompleted: true,
        changedBy: req.body.user,
      },
    }, null, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.send('Successfully changed');
    });
  }
  if (req.body.isCompleted === true) {
    db.Goal.findOneAndUpdate({
      _id: req.body.id,
    }, {
      $set: {
        isCompleted: false,
        changedBy: req.body.user,
      },
    }, null, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.send('Successfully changed');
    });
  }
});

app.post('/tenYear', (req, res) => {
  console.log(req.body);
  db.tenYearSave({
    user: req.body.user,
    goal: req.body.goal,
  });
  console.log('Saved to DB');
});

app.get('/tenYear', (req, res) => {
  db.TenYear.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/tenYear', (req, res) => {
  db.TenYear.findOneAndRemove({ _id: req.body.id }, (err, data) => {
    console.log(data, 'DATAAA');
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

app.post('/fiveYear', (req, res) => {
  console.log(req.body);
  db.fiveYearSave({
    user: req.body.user,
    goal: req.body.goal,
  });
  console.log('Saved to DB');
});
app.get('/fiveYear', (req, res) => {
  db.FiveYear.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/fiveYear', (req, res) => {
  db.FiveYear.findOneAndRemove({ _id: req.body.id }, (err, data) => {
    console.log(data, 'DATAAA');
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

app.post('/oneYear', (req, res) => {
  console.log(req.body);
  db.oneYearSave({
    user: req.body.user,
    goal: req.body.goal,
  });
  console.log('Saved to DB');
});
app.get('/oneYear', (req, res) => {
  db.OneYear.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

app.patch('/oneYear', (req, res) => {
  db.OneYear.findOneAndRemove({ _id: req.body.id }, (err, data) => {
    console.log(data, 'DATAAA');
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
