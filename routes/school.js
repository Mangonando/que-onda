// const router = require("express").Router();
//const danceSchools = require("../seeds");

/* GET home page */
const schoolIndex = (req, res, next) => {
  const indexId = danceSchools.filter((item, index) => {
    item._id = index;
    return item.id === req.params["id"];
  });
  let index = null;
  if (indexId.length > 0) {
    index = indexId[0]._id;
    res.render("school/index", {
      school: [danceSchools[index]],
    });
  } else {
    res.render("school/index");
  }
};

const schoolProfile = (req, res, next) => {
    const indexId = danceSchools.filter((item, index) => {
      item._id = index;
      return item.id === req.params["id"];
    });
    // console.log("OEEEEEEEEEEE", indexId);
    let index = null;
    if (indexId.length > 0) {
      index = indexId[0]._id;
      res.render("school/edit", {
        school: [danceSchools[index]],
      });
    } else {
      res.render("school/edit");
    }
  };

  exports.schoolIndex = schoolIndex
  exports.schoolProfile = schoolProfile
