function calculatorOfFirstAndLastEmelent(inputArr){
    let firstElement = Number(inputArr[0]);
    let lastElement = Number(inputArr[inputArr.length-1]);
    let output = firstElement+lastElement;
    return output;
}

console.log(calculatorOfFirstAndLastEmelent(['20', '30', '40']));