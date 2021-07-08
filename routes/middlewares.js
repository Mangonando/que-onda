// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

const loginCheck = () => {
    return (req, res, next) => {
      // check if the user is logged in 
      if (req.isAuthenticated()) {
        next();
      } else {
        res.redirect('/login');
      }
    }
  }
  
  module.exports = {loginCheck}

  
