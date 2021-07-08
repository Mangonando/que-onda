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
    time: {
      hour: Number,
      minute: Number},
    days: [{
        day: String,
        opt: Boolean,
       },
        {day: String,
        opt: Boolean},
        {day: String,
        opt: Boolean},
      {day: String,
      opt: Boolean},
      {day: String,
      opt: Boolean}
      ],
    price: Number,
    id: String
  });

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;