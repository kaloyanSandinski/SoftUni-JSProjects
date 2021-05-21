function printer(inputArr, number) {
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i += number) {
        outputArr.push(inputArr[i]);
    }
    return outputArr;
}

console.log(printer(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2))