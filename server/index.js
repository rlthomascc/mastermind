const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

// COMPARISON ALGORITHM (new Date().getTime() + (1 * 2 * 60 * 60 * 1000))

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
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
  db.Forum.findByIdAndRemove(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send('Forum successfully deleted');
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
  db.Tasks.findByIdAndRemove(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send('Task successfully delted');
  });
});

app.post('/todo', (req, res) => {
  db.todoSave({
    username: req.body.user,
    todo: req.body.todo,
    date: req.body.date,
  });
  console.log('Saved to DB');
});

app.get('/todo', (req, res) => {
  db.Todo.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
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
  db.Goal.find().exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});


const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
