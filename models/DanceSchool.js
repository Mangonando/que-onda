const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//we gotta change time with an array of objects with minute and hour
//we gotta implement javascript in hbs handler

const danceSchoolSchema = new Schema({
  username: String,
  password: String,
  school: String,
  danceStyles: [String],
  image: String,
  id: String
});

const DanceSchool = mongoose.model("DanceSchool", danceSchoolSchema);

module.exports = DanceSchool;
