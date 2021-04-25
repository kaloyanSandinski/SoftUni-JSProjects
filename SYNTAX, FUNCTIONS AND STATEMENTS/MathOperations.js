function solve(num1, num2, str) {
    let result;
    if (str == '+') {
        result = num1 + num2;
    } else if (str == '-') {
        result = num1 - num2;
    } else if (str == '/') {
        result = num1 / num2;
    } else if (str == '*') {
        result = num1 * num2;
    } else if (str == '%') {
        result = num1 % num2;
    } else if (str == '**') {
        result = num1 ** num2;
    }
    console.log(result);
}
solve(3, 5.5, '*');