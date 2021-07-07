const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    name: String,
    level: Number,
    image: String,
    school: String,
    danceStyle: String,
    teacher: String,
    time: [{
      "hour": Number,
      "minute": Number}],
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