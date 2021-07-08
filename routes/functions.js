
function timesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.time.hour < b.time.hour) return -1;
    if (a.time.hour > b.time.hour) return 1;

    // else a.hour === b.hour, so compare minutes to break the tie
    if (a.time.minute < b.time.minute) return -1;
    if (a.time.minute > b.time.minute) return 1;

    // couldn't break the tie
    return 0;
    });
    //console.log(classes, "party")
    return classes;
}

function inBetweenTimes(classes, hour_a, hour_b){
    return classes.filter(aclass => {
        return aclass.time.hour >= hour_a && aclass.time.hour <= hour_b});
    }


function namesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    //console.log("Hi!!!!")
    //console.log(a.time.hour[0], "a . time [0]")

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

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
    console.log(a.schoolId, "this is a school")
    if (a.school < b.school) return -1;
    if (a.school > b.school) return 1;

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

    if (a.danceStyle < b.danceStyle) return -1;
    if (a.danceStyle > b.danceStyle) return 1;

    // couldn't break the tie
    return 0;
    });
    return classes;
}

module.exports = {timesort, namesort, schoolsort, dancestylesort, inBetweenTimes};
