function findDiagonalSumMatrix(inputMatrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let row = 0; row < inputMatrix.length; row++) {
        let arr = inputMatrix[row];
        mainDiagonal+=Number(arr[row]);
        secondaryDiagonal+=Number(arr[arr.length-row-1]);
    }

console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

findDiagonalSumMatrix([[20, 40],
[10, 60]]);