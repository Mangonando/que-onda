const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const danceSchoolSchema = new Schema({
  school: String,
  danceStyles: String,
  teacher: String,
  days: String,
  time: String,
  price: Number,
  
});

const DanceSchool = mongoose.model("DanceSchool", danceSchoolSchema);

module.exports = DanceSchool;