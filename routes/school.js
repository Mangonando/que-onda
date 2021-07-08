// const router = require("express").Router();
const DanceSchool = require("../models/DanceSchool");
const Training = require("../models/Training");

/* GET home page */
const schoolIndex = (req, res, next) => {
  DanceSchool.findById(req.params["id"], (err, doc) => {
    Training.find({ schoolId: doc._id }, (err, docs) => {
      console.log("La linea 6", err);
      if (err) {
        res.render("school/index");
      } else {
        console.log("OEEEE", doc);
        res.render("school/index", {
          school: doc,
          classes: docs,
        });
      }
    });
  });
};

const schoolProfile = (req, res, next) => {
  DanceSchool.findById(req.params["id"], (err, doc) => {
    if (err) {
      res.render("school/edit");
    } else {
      console.log("OEEEE", doc);
      res.render("school/edit", {
        school: doc,
      });
    }
  });
};

exports.schoolIndex = schoolIndex;
exports.schoolProfile = schoolProfile;
