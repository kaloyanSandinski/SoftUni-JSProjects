function sorterNumericArr(inputArr) {
    inputArr.sort((a, b) => a - b);
    let outputArr = [];
    while (inputArr.length) {
        outputArr.push(inputArr.shift());
        outputArr.push(inputArr.pop());
    }
    return outputArr.filter(n => n != undefined);
}

console.log(sorterNumericArr([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 89]));