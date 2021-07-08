//const clientIndex = require("./client");
const { schoolIndex, schoolProfile } = require("./school");
const Training = require("../models/Training");
const router = require("express").Router();
const {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes} = require("./middleWare");
const DanceSchool = require("../models/DanceSchool");

router.get('/', (req, res, next) => {
     Training.find()
     .then(trainings => {
       timesort(trainings);
       //console.log("hi");
       //console.log(trainings);
       res.render('index', {trainings});
      })
     .catch(err => {
       next(err);
     });
})



router.post('/filtered_hours', (req, res, next) => {
  let {hour, end_hour} = req.body;
 
  Training.find()
  .then(response => {
    let trainings = inBetweenTimes(response, hour, end_hour);
    console.log(trainings);
    //console.log(trainings);
    res.render('index', {trainings});
   })
  .catch(err => {
    next(err);
  });
  });
//})



router.get('/sorted_name', (req, res, next) => {
  Training.find()
  .then(trainings => {
    namesort(trainings);
    //console.log("hi");
    //console.log(trainings);
    res.render('index', {trainings});
   })
  .catch(err => {
    next(err);
  });
})

router.get('/sorted_school', (req, res, next) => {
  Training.find()
  .then(trainings => {
    schoolsort(trainings);
    //console.log("hi");
    //console.log(trainings);
    res.render('index', {trainings});
   })
  .catch(err => {
    next(err);
  });
})

router.get('/sorted_style', (req, res, next) => {
  Training.find()
  .then(trainings => {
    dancestylesort(trainings);
    //console.log("hi");
    //console.log(trainings);
    res.render('index', {trainings});
   })
  .catch(err => {
    next(err);
  });
})

router.get('/signup')


router.get("/signup", (req, res, next) => {
  res.render("signup");
});

//router.get("/client", clientIndex);

router.get("/school", schoolIndex);
router.get("/school/:id", schoolIndex);
//router.get("/school/:id/edit", schoolProfile){
 // res.render("signup")
//});

//router.get("/client", clientIndex)

module.exports = router;
