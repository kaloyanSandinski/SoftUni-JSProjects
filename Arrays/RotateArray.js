function arrRotator(inputArr, number) {
    for (let i = 0; i < number; i++) {
        let numToRotate = inputArr.pop();
        inputArr.unshift(numToRotate);
    }
    return inputArr.join(" ");
}

console.log(arrRotator(['1',
    '2',
    '3',
    '4'
], 2));