const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const school_list = require('./DanceSchool')

const trainingSchema = new Schema({
    name: String,
    level: Number,
    image: String,
    danceStyle: String,
    teacher: String,
    school: String,
    schoolId: Schema.Types.ObjectId,
    danceStyle: String,
    teacher: String,
    time: {
      hour: Number,
      minute: Number},
    days: String,
    price: Number,
    id: String
  });

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;