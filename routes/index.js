// const clientIndex = require("./student");
const { schoolIndex, schoolProfile } = require("./school");
const Training = require("../models/Training");
const router = require("express").Router();
const {timesort} = require("../sort_time");
const DanceSchool = require("../models/DanceSchool");

router.get('/', (req, res, next) => {
  console.log("home page");
     Training.find()
     .then(trainings => {
      //  console.log(trainings);
       res.render('school/index', {trainings});
      })
     .catch(err => {
       next(err);
     });
})


router.get("/signup_school", (req, res, next) => {
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



//router.get("/client", clientIndex);

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
router.get("/school/:id/edit", schoolProfile);
//   res.render("signup")
// });

//router.get("/client", clientIndex)

module.exports = router;
