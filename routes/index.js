const clientIndex = require("./client");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/client", clientIndex)

module.exports = router;
