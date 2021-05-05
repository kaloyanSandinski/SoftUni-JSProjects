function sequenceGenerator(n, k) {
    n = Number(n);
    k = Number(k)
    let output = [1];
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        output.push(Number(output.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0)));
    }
    return output.join(' ');
}

/*function sequenceGenerator(n, k) {
    n = Number(n);
    k = Number(k);
    let output = [1];
    for (let i = 1; i < n; i++) {
        if (output.length >= k) {
            output.push(output.slice(i - k, i).reduce((a, b) => a + b, 0));
        } else {
            output.push(output.reduce((a, b) => a + b, 0));
        }
    }
    return output;
} */

console.log(sequenceGenerator(8, 2));