const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mastermindGroup');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB has connected');
});

//schemas
let loginSchema = ({
    username: String,
    password: String,
});

let sessionSchema = ({
    timeStamp: { type: Date, default: new Date().getTime() },
    isDeleted: { type: Boolean, default: false },
    username: String,
    userId: String,
})


//models
let Login = mongoose.model('Login', loginSchema)
let Session = mongoose.model('Session', sessionSchema)


//save functions
function save(e) {
    console.log(e, 'SAVE FUNC')
    let obj = new Login({
        username: e.username,
        password: e.password

    });
    obj.save();
    console.log('Data saved to MongoDB Database');
};

function saveSession(e) {
    console.log(e, 'SESSION SAVE')
    let obj = new Session({
        username: e.username,
        userId: e.token
    })
    obj.save();
    console.log('Data saved to MongoDB Database')
}



const funcs = {save, Login, saveSession, Session}
module.exports = funcs;