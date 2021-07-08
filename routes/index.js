const { schoolIndex, schoolProfile } = require("./school");
const Training = require("../models/Training");
const router = require("express").Router();
const User = require("../models/UserQonda")
const {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes} = require("./functions");
const DanceSchool = require("../models/DanceSchool");
const { loginCheck } = require('./middlewares');


router.get('/', (req, res, next) => {
  console.log("home page");
     Training.find()
     .then(trainings => {
       console.log(trainings);
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

//login and sign up


//router.get("/signup", (req, res, next) => {
//  res.render("signup");
//});


//user


router.get('/loggedHome', (req, res, next) => {
  console.log("home page logged");
  let loggedUser = req.session.user;
  console.log(loggedUser)
     Training.find()
     .then(trainings => {
       console.log(trainings);
       timesort(trainings);
       res.render('indexLoggedin', {trainings, loggedUser});
      })
     .catch(err => {
       next(err);
     });
})

router.get('/user_namesort', loginCheck(), (req, res, next) => {
  console.log("home page logged");
     Training.find()
     .then(trainings => {
       console.log(trainings);
       namesort(trainings);
       res.render('indexLoggedin', {trainings});
      })
     .catch(err => {
       next(err);
     });
})

router.get('/user_schoolsort', loginCheck(), (req, res, next) => {
  console.log("home page logged");
     Training.find()
     .then(trainings => {
       console.log(trainings);
       schoolsort(trainings);
       res.render('indexLoggedin', {trainings});
      })
     .catch(err => {
       next(err);
     });
})

router.get('/user_dancestylesort', loginCheck(), (req, res, next) => {
  console.log("home page logged");
     Training.find()
     .then(trainings => {
       console.log(trainings);
       dancestylesort(trainings);
       res.render('indexLoggedin', {trainings});
      })
     .catch(err => {
       next(err);
     });
})

router.post('/user_filtered_hours', loginCheck(), (req, res, next) => {
  let {hour, end_hour} = req.body;
  Training.find()
  .then(response => {
    let trainings = inBetweenTimes(response, hour, end_hour);
    res.render('indexLoggedin', {trainings});
   })
  .catch(err => {
    next(err);
  });
  });

//User profile interactions

router.get("/edit-profile", (req, res, next) => {
  let dataFromUser = req.session.user;
  console.log(dataFromUser)
  User.findById(dataFromUser._id)
       .then(userinfo => {
         console.log(userinfo)
         res.render('student/edit-profile', {dataFromUser});
        })
       .catch(err => {
         next(err);
       });
      });

router.post("/edit-profile", (req, res, next) => {
  const {name, email, password} = req.body;
  console.log(req.params.id)
  User.findByIdAndUpdate(req.session._id, {name, email, password})
       .then(() => {
         console.log("partyd")
         res.redirect('indexLoggedin');
        })
       .catch(err => {
         next(err);
       });
      });   


// router.get('/logged', (req, res, next) => {
//   let dataFromUser = req.session.user
//   Training.find()
//      .then(trainings => {
//        timesort(trainings)
//        console.log(trainings)
//        //timesort(trainings);
//        res.render('indexLoggedin', {trainings, dataFromUser});
//       })
//      .catch(err => {
//        next(err);
//      });
// })

router.get("/my-trainings", (req, res, next) => {
  console.log("my trainings")
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
