import passport from 'passport';
import LocalStrategy from 'passport-local';

import AuthModel from './user-model';

const localOpts = {
  usernameField: 'email',
};

const localLogin = new LocalStrategy(localOpts, async (email, password, done) => {
  try {
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    } else if (!user.authenticateUser(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(localLogin);

export const authLocal = passport.authenticate('local', { session: false });
