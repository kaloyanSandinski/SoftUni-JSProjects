function sumOfNumbersInRange(firstNum, secondNum){
    let firstNumber = Number(firstNum);
    let secondNumber = Number(secondNum);
    let result = 0;
    for (let i = firstNumber; i <=secondNumber; i++) {
        result+=i;
    }
    return result;
}

console.log(sumOfNumbersInRange(1,5));