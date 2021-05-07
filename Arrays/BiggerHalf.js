function sortArray(inputArr){
    inputArr.sort((a,b)=>a-b);
    let sortedArr = [];
    
    for (let i = Math.floor(inputArr.length/2); i < inputArr.length; i++) {
        sortedArr.push(Number(inputArr[i]));
    }
    return sortedArr;
}

sortArray([3, 19, 14, 7, 2, 19, 6]);