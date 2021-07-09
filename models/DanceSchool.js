const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const classes_list = require("./Training");


//we gotta change time with an array of objects with minute and hour
//we gotta implement javascript in hbs handler

const danceSchoolSchema = new Schema({
  email: String,
  password: String,
  school: String,
  danceStyle: String,
  classes: [{
    type: Schema.Types.ObjectId,
    ref: "Training"
  }],
  image: String,
  id: String
});


const DanceSchool = mongoose.model("DanceSchool", danceSchoolSchema);

module.exports = DanceSchool;
