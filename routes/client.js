// const router = require("express").Router();
const danceSchools = require("../seeds");
// const seeds = require("../seeds")

/* GET home page */
const clientIndex = (req, res, next) => {
  res.render("client/index", {
      schools: danceSchools
  });
};

module.exports = clientIndex;