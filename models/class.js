const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const moongose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema({
  title: String,
  studio: String,
  type: String,
  date: Date,
  bezirk: String,
  time: String,
  teacher: String,
  level: Number,
  duration: Number,
  booked: Boolean,
  location: String, //for now
  logo: String, //for now, image stuff
})

const Class = mongoose.model("Class", classSchema);

module.exports = Class;