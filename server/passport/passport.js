/* eslint-disable func-names */
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// Load Login Model
const db = require('../../database/index');

module.exports = function (passport) {
  console.log('i am in the passport functions :)');
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match User
      db.Login.findOne({ username })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: 'That username is not registered' });
          }

          // Match Password
          return db.Login.findOne({ password })
            .then((pass) => {
              if (!pass) {
                return done(null, false, { message: 'Tha password is not correct' });
              }
              return done(null, user);
            });
        })
        .catch(err => console.log(err));
    }),
  );

  passport.serializeUser((user, done) => {
    console.log('** serializeUser passport Called');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('** deserializeUser passport Called');
    db.Login.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
