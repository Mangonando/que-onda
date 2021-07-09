const DanceSchool = require("../models/DanceSchool");
const Training = require("../models/Training");
const router = require("express").Router();
const bcrypt = require("bcrypt");
//const danceSchools = require("../seeds");

router.get("/school/new", (req, res, next) => {
  res.render("school/new");
});

router.post("/school/:id/new", (req, res, next) => {
  const { name, level, danceStyle, teacher, price, time, days } = req.body;
  danceLesson
    .create({ name, level, danceStyle, teacher, price, time, days })
    .then(() => {
      res.redirect("/school/:id");
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/school/:id/", (req, res, next) => {
  //   const {danceSchool} = req.params.id;
  console.log("AAAAAAAAA", req.params.id);
  DanceSchool.findById(req.params.id)
    .then((schoolFromDB) => {
      res.render("school/index", { school: schoolFromDB });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/school/:id/edit", (req, res, next) => {
  // console.log("REQQQQQ", req)
  // console.log("SCHOOOL INFO", schoolInfo)
  DanceSchool.findById(req.params.id)
    .then((dataFromSchool) => {      
      res.render("school/edit", { school: dataFromSchool});
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/school/:id/edit", (req, res, next) => {
  const { username, password, school, danceStyle } = req.body;
  console.log(req.body, "wey perrea")
  DanceSchool.findByIdAndUpdate(req.params.id, { username, password, school, danceStyle }, {new: true})
    .then((dataFromSchool) => {
      console.log(dataFromSchool)
      console.log("WEY", req.params.id);
      res.render("school/index", {school: dataFromSchool});
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/school/new", (req, res, next) => {
  const { name, level, danceStyle, teacher, price, hour, minute, days } =
    req.body;
  console.log("REQ AND BODY", req.body);
  const time = { hour: hour, minute: minute };
  Training.create({ name, level, danceStyle, teacher, price, time, days })
    .then((new_class) => {
      console.log("SESSION", req.session);
      const schoolId = req.session.user._id
      DanceSchool.findByIdAndUpdate(schoolId, {
        "$push": { "classes": new_class._id}}, {new: true})
      .then((dataFromSchool) => {
        console.log(dataFromSchool)
        DanceSchool.findById(dataFromSchool._id).populate("classes")
        .then((final_new_class)=>{
          res.render("school/index", {school: final_new_class});
        })
      })
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
