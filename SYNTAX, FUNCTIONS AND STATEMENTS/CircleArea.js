function calculateCircleArea(param) {
    if (typeof(param)=='number') {
        console.log((Math.pow(param,2)*Math.PI).toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(param)}.`);
    }
}

calculateCircleArea('Misho bate');