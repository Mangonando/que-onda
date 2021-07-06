const DanceSchool = require('./models/DanceSchool');

const danceSchools = [
  {
    school: "The House of Bachata",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Bachata",
    teacher: "Romeo Santos",
    days: "Tuesdays",
    time: "Night",
    price: 10,
    id: "the-house-of-bachata",
    username: "laneta",
    password: "123",
  },
  {
    school: "The International House of Salsa (IHOS)",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Salsa",
    teacher: "Celia Cruz",
    days: "Friday",
    time: "Night",
    price: 10,
    id: "ihos",
    username: "nomames",
    password: "123",
  },
  {
    school: "Swing -n- Out",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Swing",
    teacher: "Ella Fitzgerald",
    days: "Monday ",
    time: "Night",
    price: 15,
    id: "swing-n-out",
    username: "queonda",
    password: "123"
  },
  {
    school: "Contemporary Queens",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Contemporary",
    teacher: "Martha Graham",
    days: "Sunday",
    time: "Afternoon",
    price: 10,
    id: "contemporary-queens",
    username: "pinche",
    password: "123"
  },
  {
    school: "Modern Magic",
    image: "/images/salsaSchool.jpg",
    danceStyles: "Modern",
    teacher: "Alan Sanchez",
    days: "Saturday",
    time: "Morning",
    price: 12,
    id: "modern-magic",
    username: "pendejo",
    password: "123"
  },
];

module.exports = danceSchools;
