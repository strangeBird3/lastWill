const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const knex = require('../db/connection');
const authHelpers = require('./_helpers');

const options = {};

init();

passport.use(new LocalStrategy({usernameField: 'email',
								                passwordField: 'password'
			}, (username, password, done) => {
      // check to see if the username exists
      knex('users').where('email', email).first()
      .then((user) => {
        if (!user) return done(null, false);
        if (!authHelpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch((err) => { 
        console.log('i am an error beep boop');
        return done(err); });
}));

module.exports = passport;
 