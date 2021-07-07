
function timesort(classes){
    classes.sort(function (a, b){
    // compare hours first
    if (a.hour < b.hour) return -1;
    if (a.hour > b.hour) return 1;

    // else a.hour === b.hour, so compare minutes to break the tie
    if (a.minute < b.minute) return -1;
    if (a.minute > b.minute) return 1;

    // couldn't break the tie
    return 0;
    });
    return classes;
}

module.exports = {timesort};