function findMaxElementInMatrix(inputMatrix) {
    let maximumValue = Number.NEGATIVE_INFINITY;
    inputMatrix.forEach(rows);
    function rows(row){
        row.forEach(element => {
            if (element>=maximumValue) {
                maximumValue=Number(element);
            }
        });
    }

    return maximumValue;
}

console.log(findMaxElementInMatrix([[20, 50, 10],
[8, 33, 145]]
))