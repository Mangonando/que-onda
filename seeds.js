
const mongoose = require('mongoose');
const DanceSchool = require('./models/DanceSchool');
const Classes = require('./models/class');

mongoose.connect('mongodb://localhost/que-onda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const classes = [
  {
    school: "The House of Bachata",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Bachata",
    teacher: "Romeo Santos",
    days: "Tuesdays",
    time: [{
      "hour": 10,
      "minute": 12}],
    days: [{
        "Monday": true, 
        "Tuesday": true, 
        "Wednesday": true, 
        "Thursday": true, 
        "Friday": true, 
        "Saturday": true,
        "Sunday": true,
      }],
    id: "the-house-of-bachata",
  },
  {
    school: "The International House of Salsa (IHOS)",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Salsa",
    teacher: "Celia Cruz",
    days: "Friday",
    time: [{
      "hour": 10,
      "minute": 00}],
      days: [{
        "Monday": true, 
        "Tuesday": true, 
        "Wednesday": true, 
        "Thursday": true, 
        "Friday": true, 
        "Saturday": true,
        "Sunday": true,
      }],
    price: 10,
    id: "ihos"
  },
  {
    school: "Swing -n- Out",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Swing",
    teacher: "Ella Fitzgerald",
    days: "Monday ",
    time: [{
      "hour": 9,
      "minute": 50}],

      days: [{
        "Monday": true, 
        "Tuesday": true, 
        "Wednesday": true, 
        "Thursday": true, 
        "Friday": true, 
        "Saturday": true,
        "Sunday": true,
      }],
    price: 15,
    id: "swing-n-out"
  },
  {
    school: "Contemporary Queens",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Contemporary",
    teacher: "Martha Graham",
    days: "Sunday",
    time: [{
      "hour": 11,
      "minute": 00}],
    days: [{
        "Monday": true, 
        "Tuesday": true, 
        "Wednesday": true, 
        "Thursday": true, 
        "Friday": true, 
        "Saturday": true,
        "Sunday": true,
      }],
    price: 10,
    id: "contemporary-queens"
  },
  {
    school: "Modern Magic",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Modern",
    teacher: "Alan Sanchez",
    days: "Saturday",
    time: [{
      "hour": 8,
      "minute": 20}],
      days: [{
        "Monday": true, 
        "Tuesday": true, 
        "Wednesday": true, 
        "Thursday": true, 
        "Friday": true, 
        "Saturday": true,
        "Sunday": true,
      }],
    price: 12,
    id: "modern-magic"
  },
];

Classes.insertMany(classes)
  .then(classes => {
    console.log(`${classes} have been added”`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

module.exports = classes;
