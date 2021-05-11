// local strategy
const LocalStrategy = require("passport-local").Strategy;
// used to compare the password they send us
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    // we can check for user in DB here
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      // if this is true, we have an authenticated user
      if (await bcrypt.compare(password, user.password)) {
        // if the password matches, we return that user
        return done(null, user);
        // else the password doesn't match
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (error) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  // serialize and store in session
  passport.serializeUser((user, done) => done(null, user.id));
  // removes the serialized user in the session
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;