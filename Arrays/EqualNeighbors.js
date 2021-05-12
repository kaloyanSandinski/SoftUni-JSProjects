function numberOfEqualNumbers(inputArr) {
    let perviousArr = [];
    let counter = 0;
    inputArr.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            if (i < element.length - 1 && element[i] === element[i + 1]) {
                counter += 1;
            }
            if (perviousArr[i] === element[i]) {
                counter += 1;
            }
        }
        perviousArr = element;
    });
    return counter;
}

console.log(numberOfEqualNumbers([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));