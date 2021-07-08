const { schoolIndex, schoolProfile } = require("./school");
const Training = require("../models/Training");
const router = require("express").Router();
const {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes} = require("./middleWare");
const DanceSchool = require("../models/DanceSchool");

router.get('/', (req, res, next) => {
  console.log("home page");
     Training.find()
     .then(trainings => {
       timesort(trainings);
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


router.get("/student/edit-profile", (req, res, next) => {
  res.render("student/edit-profile")
  .catch(err => {
    next(err);
  });
});

router.get("/student/my-trainings", (req, res, next) => {
  // console.log("user-id?", req.session.user);
  res.render("student/my-trainings")
  .catch(err => {
    next(err);
  });
});




// router.get('/:id/edit', (req, res, next) => {
//   Movie.findById(req.params.id).populate('cast')
//     .then(movie => {
//       console.log(movie);
//       Celebrity.find().then(celebrities => {
//         // console.log(movie.cast);
//         let options = '';
//         let selected = '';
//         celebrities.forEach(actor => {
//           selected = movie.cast.map(el => el._id).includes(actor._id) ? ' selected' : '';
//           options += `<option value="${actor._id}" ${selected}>${actor.name}</option>`;
//         });
//         console.log(options);
//         // res.render('movies/edit', { movie, celebrities });
//         res.render('movies/edit', { movie, options });
//       })
//     })
//     .catch(err => {
//       next(err);
//     })
// });

router.get("/school", schoolIndex);
router.get("/school/:id", schoolIndex);
//router.get("/school/:id/edit", schoolProfile){
 // res.render("signup")
//});
router.get("/school/:id/edit", schoolProfile);



//router.get("/client", clientIndex)

module.exports = router;
