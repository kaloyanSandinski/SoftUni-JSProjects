function extractGreatherThan(inputArr) {
    let currGreatest = Number.NEGATIVE_INFINITY;
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] >= currGreatest) {
            currGreatest = inputArr[i];
            outputArr.push(inputArr[i]);
        }
    }

    return outputArr;
}

console.log(extractGreatherThan([1,
    2,
    3,
    4
]));