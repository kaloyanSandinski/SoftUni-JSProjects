function solve(inputNumsArr, startIndex, range) {
    let isNotNum = false;
    if (Array.isArray(inputNumsArr) == false) {
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (range > inputNumsArr.length - 1) {
        range = inputNumsArr.length - 1;
    }
    return Number(inputNumsArr.slice(startIndex, range + 1).reduce((a, b) => a + Number(b), 0).toFixed(1));
}

module.exports = solve;