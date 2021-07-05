const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const userInfo = mongoose.model("user", userInfoSchema);

module.exports = userInfo;