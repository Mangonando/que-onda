
const mongoose = require('mongoose');
const DanceSchool = require('./models/DanceSchool');
const Training = require('./models/Training');

mongoose.connect('mongodb://localhost/que-onda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const classes = [
  {
    name: "Bachata I",
    level: 1,
    school: "The House of Bachata",
    image: "/images/salsaSchool.jpg",
    danceStyle: "Bachata",
    teacher: "Romeo Santos",
    price: 10,
    time: [{
      "hour": 10,
      "minute": 12}],
      days: [{
        day: "Monday",
        opt: true,
       },
        {day: "Tuesday",
        opt: true},
        {day: "Wednesday",
        opt: true},
      {day: "Thursday",
      opt: false},
      {day: "Friday",
      opt: false}
      ],
    id: "the-house-of-bachata",
    username: "laneta",
    password: "123",
  },
  {
    name: "Salsa 2",
    level: 2,
    school: "The International House of Salsa (IHOS)",
    image: "/images/salsaSchool.jpg",
    danceStyle: "Salsa",
    teacher: "Celia Cruz",
    time: [{
      "hour": 10,
      "minute": 00}],
      days: [{
        day: "Monday",
        opt: true,
       },
        {day: "Tuesday",
        opt: true},
        {day: "Wednesday",
        opt: true},
      {day: "Thursday",
      opt: false},
      {day: "Friday",
      opt: false}
      ],
    price: 10,
    id: "ihos",
    username: "nomames",
    password: "123",
  },
  {
    name: "Swing III",
    level: 3,
    school: "Swing -n- Out",
    image: "/images/salsaSchool.jpg",
    danceStyle: "Swing",
    teacher: "Ella Fitzgerald",
    time: [{
      "hour": 9,
      "minute": 50}],

      days: [{
        day: "Monday",
        opt: true,
       },
        {day: "Tuesday",
        opt: true},
        {day: "Wednesday",
        opt: true},
      {day: "Thursday",
      opt: false},
      {day: "Friday",
      opt: false}
      ],
    price: 15,
    id: "swing-n-out",
    username: "queonda",
    password: "123"
  },
  {
    name: "Profi Contemporary",
    level: 4,
    school: "Contemporary Queens",
    image: "/images/salsaSchool.jpg",
    danceStyle: "Contemporary",
    teacher: "Martha Graham",
    time: [{
      "hour": 11,
      "minute": 00}],
      days: [{
        day: "Monday",
        opt: true,
       },
        {day: "Tuesday",
        opt: true},
        {day: "Wednesday",
        opt: true},
      {day: "Thursday",
      opt: false},
      {day: "Friday",
      opt: false}
      ],
    price: 10,
    id: "contemporary-queens",
    username: "pinche",
    password: "123"
  },
  {
    name: "Modern beginner",
    level: 1,
    school: "Modern Magic",
    image: "/images/salsaSchool.jpg",
    danceStyle: "Modern",
    teacher: "Alan Sanchez",
    time: [{
      "hour": 8,
      "minute": 20}],
      days: [{
        day: "Monday",
        opt: true,
       },
        {day: "Tuesday",
        opt: true},
        {day: "Wednesday",
        opt: true},
      {day: "Thursday",
      opt: false},
      {day: "Friday",
      opt: false}
      ],
    price: 12,
    id: "modern-magic",
    username: "pendejo",
    password: "123"
  },
];

Training.insertMany(classes)
  .then(classes => {
    console.log(`${classes} have been added”`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

//module.exports = classes;
