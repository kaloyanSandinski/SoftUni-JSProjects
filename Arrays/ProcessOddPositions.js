function solve(inputArr){
    let outputArr = [];
for (let i = 0; i < inputArr.length; i++) {
    if (i%2!==0) {
        outputArr.push(inputArr[i]*2);
    }
}

    return outputArr.reverse();
}

console.log(solve([10, 15, 20, 25]));