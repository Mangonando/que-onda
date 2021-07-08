
function timesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.time.hour[0] < b.time.hour[0]) return -1;
    if (a.time.hour[0] > b.time.hour[0]) return 1;

    // else a.hour === b.hour, so compare minutes to break the tie
    if (a.time.minute[0] < b.time.minute[0]) return -1;
    if (a.time.minute[0] > b.time.minute[0]) return 1;

    // couldn't break the tie
    return 0;
    });
    //console.log(classes, "party")
    return classes;
}

function inBetweenTimes(classes, hour_a, hour_b){
    return classes.filter(aclass => {
        return aclass.time.hour[0] >= hour_a && aclass.time.hour[0] <= hour_b});
    }


function namesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.name[0] < b.name[0]) return -1;
    if (a.name[0] > b.name[0]) return 1;

    // couldn't break the tie
    return 0;
    });
    return classes;
}

function schoolsort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.school[0] < b.school[0]) return -1;
    if (a.school[0] > b.school[0]) return 1;

    // couldn't break the tie
    return 0;
    });
    return classes;
}

function dancestylesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.danceStyle[0] < b.danceStyle[0]) return -1;
    if (a.danceStyle[0] > b.danceStyle[0]) return 1;

    // couldn't break the tie
    return 0;
    });
    return classes;
}

module.exports = {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes};
