function printTheNumberOfDay(param) {
    let result;
    if (param == 'Monday') {
        result = 1;
    } else if (param == 'Tuesday') {
        result = 2;
    } else if (param == 'Wednesday') {
        result = 3;
    } else if (param == 'Thursday') {
        result = 4;
    } else if (param == 'Friday') {
        result = 5;
    } else if (param == 'Saturday') {
        result = 6;
    } else if (param == 'Sunday') {
        result = 7;
    } else {
        result = 'error';
    } 
    return result;
}

console.log(printTheNumberOfDay('Invalid'));