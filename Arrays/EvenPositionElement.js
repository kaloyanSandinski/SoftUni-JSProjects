function findsEvenElements(inputArr){
    let output = '';
for (let i = 0; i < inputArr.length; i++) {
    if (i%2===0) {
        output+=inputArr[i]+' ';
    }
}
console.log(output);
}

findsEvenElements(['20', '30', '40', '50', '60']);