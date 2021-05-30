function solve(inputArr) {
    const outputObj = {};
    for (let i = 0; i < inputArr.length; i += 2) {
        outputObj[inputArr[i]] = Number(inputArr[i + 1]);
    }
    return outputObj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));