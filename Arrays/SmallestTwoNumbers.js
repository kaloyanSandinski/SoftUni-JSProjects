function smallestTwoNums(inputArr) {
    let sortedArr = inputArr.sort((a,b)=>a-b);
    
    let firstSmallest = sortedArr[0];
    let secondSmallest = sortedArr[1];

    console.log(`${firstSmallest} ${secondSmallest}`);
}

smallestTwoNums([30, 15, 50, 5]);