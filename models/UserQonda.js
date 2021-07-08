const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const class_list = require('./Training')

const userInfoSchema = new Schema({
  name: String,
  email: String,
  password: String,
  classes: [{
    type: Schema.Types.ObjectId,
    ref: class_list,
  }]
});

const userInfo = mongoose.model("user", userInfoSchema);

module.exports = userInfo;