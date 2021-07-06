const clientIndex = require("./main-view-classes");
const Class = require("../models/class");
const router = require("express").Router();
const classes = require("../seeds");
const {timesort} = require("../sort_time");
const DanceSchool = require("../models/DanceSchool");


/* GET home page */
//we will need to change from seeds to data base once its working

router.get('/', (req, res, next) => {
  //fix
  res.render('school/index', {classes})
    // Class.find()
    // .then(classes => res.render('school/index', {classes}))
    // .catch(err => {
    //   next(err);
    // });
});

router.get('/schools', (req, res, next) => {
    Class.find()
    .then(classes => res.render('school/index', {classes}))
    .catch(err => {
      next(err);
    });
})

router.get("/signup", (req, res, next) => {
  res.render("signup")
});

router.get("/client", clientIndex)

module.exports = router;
