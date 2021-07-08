const router = require("express").Router();
const passport = require('passport');
const User = require('../models/UserQonda');
const bcrypt = require('bcrypt');
const Training = require("../models/Training");
const {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes} = require("./functions");



// github login
//router.get('/github', passport.authenticate('github'));
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// this is the route that we registered on github api when we created the app
// router.get('/auth/github/callback',
//   passport.authenticate('github', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true // only if you want to use the 'connect'flash' package
//   }));

router.get('/auth/google/callback', 
  passport.authenticate('google', 
  { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash:true}));

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   passReqToCallback: true,
// }));

router.get("/school/login", (req, res, next) => {
  res.render("school/login");
});

router.post('/school/login', passport.authenticate('local', {
  //successRedirect must take to /school/:id from MongoDB
  successRedirect: '/school/',
  failureRedirect: '/school/login',
  passReqToCallback: true,
}));


// if you need more control and also want to set an error message
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, theUser, failureDetails) => {
//     if (err) {
//       // Something went wrong authenticating user
//       return next(err);
//     }
//     if (!theUser) {
//       // Unauthorized, `failureDetails` contains the error messages from our logic in "LocalStrategy" {message: '…'}.
//       res.render('login', { message: 'Wrong password or username' });
//       return;
//     }
//     // save user in session: req.user
//     req.login(theUser, err => {
//       if (err) {
//         // Session save went bad
//         return next(err);
//       }
//       // All good, we are now logged in and `req.user` is now set
//       res.redirect('/');
//     });
//   })(req, res, next);
// });

router.get('/login', (req, res, next) => {
  res.render('login')
})

// this is the route where the signup form get's posted to
router.post('/signup', (req, res, next) => {
  // get username and password
  const { name, password, email } = req.body;
  console.log({ name, password, email });
  // is the password at least 8 chars
  if (password.length < 8) {
    // if not we show the signup form again with a message
    res.render('signup', { message: 'Your password has to be 8 chars min' });
    return
  }
  if (email === '') {
    res.render('signup', { message: 'Your email cannot be empty' });
    return
  }
  // validation passed - password is long enough and the username is not empty
  // check if the username already exists
  User.findOne({ email: email })
    .then(userFromDB => {
      // if user exists -> we render signup again
      if (userFromDB !== null) {
        res.render('signup', { message: 'This email is already taken' });
      } else {
        // the username is available
        // we create the hashed password
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash);
        // create the user in the database
        User.create({ name: name, email: email, password: hash})
          .then(dataFromUser => {
            req.session.user = dataFromUser;
            console.log()
            console.log(dataFromUser);
            // log the user in immediately
            // req.session.user = createdUser; -> this is the 'node-basic'auth-way'
            // this is the passport login
            req.login(dataFromUser, err => {
              if (err) {
                next(err);
              } else {
                res.redirect('logged');
              }
            })
          })
      }
    })
});


router.get('/logout', (req, res, next) => {
  // this is a passport function
  req.logout();
  res.redirect('/');
});

router.get('/logged', (req, res, next) => {
  let dataFromUser = req.session.user
  Training.find()
     .then(trainings => {
       timesort(trainings)
       console.log(trainings)
       //timesort(trainings);
       res.render('indexLoggedin', {trainings, dataFromUser});
      })
     .catch(err => {
       next(err);
     });
})

router.post('/login', (req, res, next) => {
  console.log(req.body, "party")
  const {email: email, password: password } = req.body
  User.findOne({email})
    .then(dataFromUser => {
      if (password == null) {
        res.render('login', { message: 'Wrong credential' })
        return;}

      if (email == null) {
        console.log(dataFromUser)
        console.log("failure in the email === null")
        res.render('login', { message: 'Wrong credential' })
        return;
      }
      if (bcrypt.compareSync(password, dataFromUser.password)) {
        req.session.user = dataFromUser;
        console.log("email?", req.session.user)
        res.redirect("logged");
      } else {
        console.log("failure to login")
        res.render('login', {message: 'Wrong credentials'})
        return;
      }
    })
})


  
module.exports = router;
