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
  let userinfo = req.session.user;
  //console.log(dataFromUser)
  User.findById(userinfo._id)
       .then(dataFromUser => {
         //console.log(userinfo)
         res.render('student/edit-profile', {dataFromUser});
        })
       .catch(err => {
         next(err);
       });
      });

router.post("/edit-profile/", (req, res, next) => {
  const {name, email, password} = req.body;
  User.findByIdAndUpdate(req.session.user._id, {name, email, password})
       .then(() => {
         console.log("party", req.session.user)
         res.redirect('logged');
        })
       .catch(err => {
         next(err);
       });
      });   

     

router.get("/my-trainings", (req, res, next) => {
  console.log("my trainings")
  User.findById(req.session.user._id).populate('classes')
  .then(user => {    
      console.log('user', user)
      res.render("student/my-trainings", {userdetails: user}) 
}).catch(err => {
    console.log('Error while finding a project by ID during application: ', err);
  });
});

router.get("/add-class/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.session.user._id, 
    {
        "$push": { "classes": req.params.id },
    }, 
    {new: true}).then(user => {    
      console.log('user', user)
    res.redirect(`/my-trainings`);
      }).catch(err => {
    })  
  });

  // router.post('/add-class/:id/delete', (req, res, next) => {
  // //   User.findByIdAndUpdate(req.session.user._id,
  
  //       res.redirect('/my-trainings');
  //     .catch(err => {
  //       next(err);
  //     }))
  // });
  

// router.get(
// });

router.get("/school", schoolIndex);
router.get("/school/:id", schoolIndex);
//router.get("/school/:id/edit", schoolProfile){
 // res.render("signup")
//});
router.get("/school/:id/edit", schoolProfile);



//router.get("/client", clientIndex)

module.exports = router;
