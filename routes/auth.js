const router = require("express").Router();
const passport = require('passport');
const User = require('../models/User.model');
const cors = require('cors')
const bcrypt = require('bcrypt');
const app = express();
require('../passport-setup');

app.use(cors())

app.use(bodyParser.urlenconded({extended: false}));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
    name: 'sessh',
    keys: ['key1', 'key2']
}))

app.get('/failed', (req,res) => res.send('OOPS THIS IS WRONG'))
app.get('/good', (req,res) => res.send(`welcome ${req.user.name}`))

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'name', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  
module.exports = Router;
