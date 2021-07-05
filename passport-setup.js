const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport,serializeUser(function(user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    //not sure I need to do this :-( meaning, adding the key
    clientID: "362289041960-0hqff2tu6ekeniibo4m6h5uan9s2d7m5.apps.googleusercontent.com",
    clientSecret: "T_rPfdSWRrtjjAPLdJ6FF9qZ",
    callbackURL: "http://www.qonda.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      //use profile info mainly id to check if the user is registered in db
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));