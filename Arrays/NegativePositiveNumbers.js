function sortedArr(inputArr) {
    let output = [];

    for (let i = 0; i < inputArr.length; i++) {
        if(inputArr[i]<0){
            output.unshift(inputArr[i]);
        }else{
            output.push(inputArr[i]);
        }   
    }
    output.forEach(element => {
        console.log(element);
    });
}

sortedArr([7, -2, 8, 9]);