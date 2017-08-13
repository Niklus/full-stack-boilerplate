'use strict';

import passport from 'passport';
import { Strategy } from 'passport-local';
import user from '../models/userModel';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Sign in with Email and Password
passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
  
  User.findOne({ email: email }, (err, user) => {
    if (!user) {
      return done(null, false, { msg: 'The email address ' + email + ' is not associated with any account. ' +
      'Double-check your email address and try again.' });
    }
    user.comparePassword(password, function(err, isMatch) {
      if (!isMatch) {
        return done(null, false, { msg: 'Invalid email or password' });
      }
      return done(null, user);
    });
  });
}));