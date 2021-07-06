const clientIndex = require("./client");
const { schoolIndex, schoolProfile } = require("./school");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.get("/client", clientIndex);

router.get("/school", schoolIndex);
router.get("/school/:id", schoolIndex);
router.get("/school/:id/edit", schoolProfile);

module.exports = router;
