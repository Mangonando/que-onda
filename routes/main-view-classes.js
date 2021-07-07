//const router = require("express").Router();
//const danceSchools = require("../seeds");
//const Class = require("../models/DanceSchool");
//const {timesort} = require("../sort_time")

/* GET home page */
//const clientIndex = (req, res, next) => {
//  res.render("client/index", {
 //     schools: danceSchools
 // });
//};

// router.get('/', (req, res, next) => {
//   Class.find().then(classes => {
//     // timesort(classes);
//     res.render('school/index', {classes})
//   })
//   .catch(err => {
//     next(err)
//   });
// });

// router.get('/time', (req, res, next) => {
//   Class.find().then(classes => {

//     //time method
//     res.render('school/index', {classes})
//   })
//   .catch(err => {
//     next(err)
//   });
// });

// router.get('/genre', (req, res, next) => {
//   Class.find().then(classes => {
//     //genre method
//     res.render('school/index', {classes})
//   })
//   .catch(err => {
//     next(err)
//   });
// });

//module.exports = router;