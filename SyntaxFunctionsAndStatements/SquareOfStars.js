function squarePrinter(size) {
    let result = '';
    if (size == undefined) {
        for (let i = 0; i < 5; i++) {
            for (let y = 0; y < 5; y++) {
                result += '* ';
            }
            result += '\n';
        }
    } else {
        for (let i = 0; i < size; i++) {
            for (let y = 0; y < size; y++) {
                result += '* ';
            }
            result += '\n';
        }
    }
    return result;
}

console.log(squarePrinter(10));