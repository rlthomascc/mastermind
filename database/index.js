const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mastermindGroup');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

// schemas
const loginSchema = ({
  username: String,
  password: String,
});

const sessionSchema = ({
  timeStamp: { type: Date, default: new Date().getTime() },
  isDeleted: { type: Boolean, default: false },
  username: String,
  userId: String,
  changedBy: { type: String, default: null },
});

const forumSchema = ({
  username: String,
  title: String,
  description: String,
  link: String,
  isDeleted: { type: Boolean, default: false },
  date: { type: Date, default: new Date().getTime() },
  changedBy: { type: String, default: null },
});

const tasksSchema = ({
  username: String,
  task: String,
  often: String,
  other: { type: String, default: 'N/A' },
  date: { type: Date, default: new Date().getTime() },
  isDeleted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  changedBy: { type: String, default: null },
});

const todoSchema = ({
  username: String,
  todo: String,
  date: { type: Date, default: new Date().getTime() },
  isDeleted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  changedBy: { type: String, default: null },
});

const savingsSchema = ({
  username: String,
  amount: Number,
  Date: { type: Date, default: new Date().getTime() },
  changedBy: { type: String, default: null },
});

const goalSchema = ({
  username: String,
  goal: String,
  steps: String,
  date: { type: Date, default: new Date().getTime() },
  isDeleted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  changedBy: { type: String, default: null },
});

const tenYearSchema = ({
  username: String,
  goal: String,
  date: { type: Date, default: new Date().getTime() },
});

const fiveYearSchema = ({
  username: String,
  goal: String,
  date: { type: Date, default: new Date().getTime() },
});

const oneYearSchema = ({
  username: String,
  goal: String,
  date: { type: Date, default: new Date().getTime() },
});

// models
const Login = mongoose.model('Login', loginSchema);
const Session = mongoose.model('Session', sessionSchema);
const Forum = mongoose.model('Forum', forumSchema);
const Tasks = mongoose.model('Tasks', tasksSchema);
const Todo = mongoose.model('Todo', todoSchema);
const Savings = mongoose.model('Savings', savingsSchema);
const Goal = mongoose.model('Goal', goalSchema);
const TenYear = mongoose.model('TenYear', tenYearSchema);
const FiveYear = mongoose.model('FiveYear', fiveYearSchema);
const OneYear = mongoose.model('OneYear', oneYearSchema);


// save functions
function save(e) {
  console.log(e, 'SAVE FUNC');
  const obj = new Login({
    username: e.username,
    password: e.password,

  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}

function saveSession(e) {
  console.log(e, 'SESSION SAVE');
  const obj = new Session({
    username: e.username,
    userId: e.token,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}

function forumSave(e) {
  console.log(e, 'FORUM SAVE');
  const obj = new Forum({
    username: e.username,
    title: e.title,
    description: e.description,
    link: e.link,
    date: e.date,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}

function tasksSave(e) {
  console.log(e, 'TASKS SAVE');
  const obj = new Tasks({
    username: e.username,
    task: e.task,
    often: e.often,
    other: e.other,
    date: e.date,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function todoSave(e) {
  console.log(e, 'TODO SAVE');
  const obj = new Todo({
    username: e.username,
    todo: e.todo,
    date: e.date,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function savingsSave(e) {
  console.log(e, 'SAVINGS SAVE');
  const obj = new Savings({
    username: e.username,
    amount: e.amount,
    date: e.date,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function goalSave(e) {
  const obj = new Goal({
    username: e.username,
    goal: e.goal,
    steps: e.steps,
    date: e.date,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function tenYearSave(e) {
  const obj = new TenYear({
    username: e.user,
    goal: e.goal,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function fiveYearSave(e) {
  const obj = new FiveYear({
    username: e.user,
    goal: e.goal,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

function oneYearSave(e) {
  const obj = new OneYear({
    username: e.user,
    goal: e.goal,
  });
  obj.save();
  console.log('Data Saved to MongoDB Database');
}

const funcs = {
  save,
  Login,
  saveSession,
  Session,
  Forum,
  forumSave,
  Tasks,
  tasksSave,
  Todo,
  todoSave,
  Savings,
  savingsSave,
  Goal,
  goalSave,
  TenYear,
  tenYearSave,
  FiveYear,
  fiveYearSave,
  OneYear,
  oneYearSave,
};
module.exports = funcs;
