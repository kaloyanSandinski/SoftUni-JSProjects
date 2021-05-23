function magicalMatrix(inputArr) {
    let result = true;
    let rowSum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        let currRowSum = 0;
        inputArr[i].forEach(col => {
            currRowSum += col;
        });
        if (i == 0) {
            rowSum = currRowSum;
        }
        if (rowSum !== currRowSum) {
            result = false;
        }
    }
    let colSum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        let currColSum = 0;
        for (let j = 0; j < inputArr.length; j++) {
            currColSum += inputArr[j][i];
        }
        if (i == 0) {
            colSum = currColSum;
        }
        if (colSum !== currColSum) {
            result = false;
        }
    }
    return result;
}

console.log(magicalMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));