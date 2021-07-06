const clientIndex = require("./main-view-classes");
const Training = require("../models/Training");
const router = require("express").Router();
const {timesort} = require("../sort_time");
const DanceSchool = require("../models/DanceSchool");


/* GET home page */
//we will need to change from seeds to data base once its working

router.get('/', (req, res, next) => {
  //fix
  res.render('school/index', {seeds})
    // Class.find()
    // .then(classes => res.render('school/index', {classes}))
    // .catch(err => {
    //   next(err);
    // });
});

router.get('/schools', (req, res, next) => {
     Training.find()
     .then(trainings => {
       console.log(trainings);
       res.render('school/index', {trainings});
      })
     .catch(err => {
       next(err);
     });
})

router.get("/signup", (req, res, next) => {
  res.render("signup")
});

//router.get("/client", clientIndex)

module.exports = router;
