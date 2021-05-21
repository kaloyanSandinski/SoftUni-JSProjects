function adderAndRemover(inputArr) {
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'remove') {
            outputArr.pop();
        } else {
            outputArr.push(i + 1);
        }
    }
    if (outputArr.length == 0) {
        return 'Empty';
    }
    return outputArr.join('\n');
}

console.log(adderAndRemover(['remove',
    'remove',
    'remove'
]));