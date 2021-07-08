const mongoose = require("mongoose");
const DanceSchool = require("./models/DanceSchool");
const Training = require("./models/Training");

mongoose.connect("mongodb://localhost/que-onda", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const danceSchools = [
  {
    school: "The House of Bachata",
    image: "/images/salsaSchool.jpg",
    danceStyles: ["Bachata", "Merengue"],
    id: "the-house-of-bachata",
  },
  {
    school: "The International House of Salsa (IHOS)",
    image: "/images/salsaSchool.jpg",
    danceStyles: ["Salsa", "Cumbia"],
    id: "ihos",
  },
  // {
  //   school: "",
  //   image: "/images/salsaSchool.jpg",
  //   danceStyles: "",
  //   id: "",
  // },
  // {
  //   school: "",
  //   image: "/images/salsaSchool.jpg",
  //   danceStyles: "",
  //   id: "",
  // },
  // {
  //   school: "",
  //   image: "/images/salsaSchool.jpg",
  //   danceStyles: "",
  //   id: "",
  // },
];

const classes = [
  {
    name: "Bachata I",
    level: 1,
    // schoolId: "the-house-of-bachata",
    danceStyle: "Bachata",
    school: "The House of Bachata",
    teacher: "Romeo Santos",
    price: 10,
    time: {
        hour: 10,
        minute: 12,
      },
    days: [
      {
        day: "Monday",
        opt: true,
      },
      { day: "Tuesday", opt: true },
      { day: "Wednesday", opt: true },
      { day: "Thursday", opt: false },
      { day: "Friday", opt: false },
    ],
    id: "the-house-of-bachata-bac-1",
  },
  {
    name: "Salsa 2",
    level: 2,
    // school: "The International House of Salsa (IHOS)",
    danceStyle: "Salsa",
    teacher: "Celia Cruz",
    school: "House of Salsa",
    time: 
      {
        hour: 10,
        minute: 00,
      },
    
    days: [
      {
        day: "Monday",
        opt: true,
      },
      { day: "Tuesday", opt: true },
      { day: "Wednesday", opt: true },
      { day: "Thursday", opt: false },
      { day: "Friday", opt: false },
    ],
    price: 10,
    id: "ihos",
  },
  {
    name: "Swing III",
    level: 3,
    // school: "Swing -n- Out",
    danceStyle: "Swing",
    school: "House of Swing",
    teacher: "Ella Fitzgerald",
    time: 
      {
        hour: 9,
        minute: 50,
      },
    

    days: [
      {
        day: "Monday",
        opt: true,
      },
      { day: "Tuesday", opt: true },
      { day: "Wednesday", opt: true },
      { day: "Thursday", opt: false },
      { day: "Friday", opt: false },
    ],
    price: 15,
    id: "swing-n-out",
  },
  {
    name: "Profi Contemporary",
    level: 4,
    // school: "Contemporary Queens",
    danceStyle: "Contemporary",
    school: "House of Contemporary",
    teacher: "Martha Graham",
    time: 
      {
        hour: 11,
        minute: 00,
      },
    
    days: [
      {
        day: "Monday",
        opt: true,
      },
      { day: "Tuesday", opt: true },
      { day: "Wednesday", opt: true },
      { day: "Thursday", opt: false },
      { day: "Friday", opt: false },
    ],
    price: 10,
    id: "contemporary-queens",
  },
  {
    name: "Modern beginner",
    level: 1,
    // school: "Modern Magic",
    danceStyle: "Modern",
    teacher: "Alan Sanchez",
    school: "House of Modern",
    time:
      {
        hour: 8,
        minute: 20,
      },
    days: [
      {
        day: "Monday",
        opt: true,
      },
      { day: "Tuesday", opt: true },
      { day: "Wednesday", opt: true },
      { day: "Thursday", opt: false },
      { day: "Friday", opt: false },
    ],
    price: 12,
    id: "modern-magic",
  },
];

DanceSchool.insertMany(danceSchools)
  .then((danceSchools) => {
    console.log(`${danceSchools} have been added”`);

    classes.map(oneClass =>{
        oneClass.schoolId = danceSchools[0]._id
    })
    Training.insertMany(classes)
      .then((classes) => {
        console.log(`${classes} have been added”`);
        mongoose.connection.close();
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

