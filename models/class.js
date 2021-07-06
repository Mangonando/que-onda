const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const classSchema = new Schema({
    name: String,
    school: String,
    danceStyle: String,
    teacher: String,
    days: String,
    time: [{
      "hour": Number,
      "minute": Number}],
    days: [{
        "Monday": Boolean, 
        "Tuesday": Boolean, 
        "Wednesday": Boolean, 
        "Thursday": Boolean, 
        "Friday": Boolean, 
        "Saturday": Boolean,
        "Sunday": Boolean,
      }],
    price: Number,
    id: String
  });

const Class = mongoose.model("Class", classSchema);

module.exports = Class;