const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mastermindGroup');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB has connected');
});

let loginSchema = ({
    username: String,
    password: String,
});

let Login = mongoose.model('Login', loginSchema)


function save(e) {
    console.log(e, 'SAVE FUNC')
    let obj = new Login({
        username: e.username,
        password: e.password

    });
    obj.save();
    console.log('Data saved to MongoDB Database');
};



const funcs = {save, Login}
module.exports = funcs;