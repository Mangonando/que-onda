const clientIndex = require("./main-view-classes");
const Training = require("../models/Training");
const router = require("express").Router();
const {timesort} = require("../sort_time");
const DanceSchool = require("../models/DanceSchool");

router.get('/', (req, res, next) => {
     Training.find()
     .then(trainings => {
       console.log("hi");
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
