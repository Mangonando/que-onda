const DanceSchool = require('./models/DanceSchool');

 

// mongoose.connect("mongodb://localhost/movies", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const danceSchools = [
    {
        school: "The House of Bachata",
        danceStyles: "Bachata",
        teacher: "Romeo Santos",
        days: "Tuesdays",
        time: "Night",
        price: 10,

    },
    {
        school: "The International House of Salsa (IHOS)",
        danceStyles: "Salsa",
        teacher: "Celia Cruz",
        days: "Friday",
        time: "Night",
        price: 10,

    },
    {
        school: "Swing -n- Out",
        danceStyles: "Swing",
        teacher: "Ella Fitzgerald",
        days: "Monday ",
        time: "Night",
        price: 15,

    },
    {
        school: "Contemporary Queens",
        danceStyles: "Contemporary",
        teacher: "Martha Graham",
        days: "Sunday",
        time: "Afternoon",
        price: 10,

    },
    {
        school: "Modern Magic",
        danceStyles: "Modern",
        teacher: "Alan Sanchez",
        days: "Saturday",
        time: "Morning",
        price: 12,

    },
]

seed();