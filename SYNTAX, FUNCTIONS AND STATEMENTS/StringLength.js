function calculatedStr(firstStr, secondStr, thirdStr) {
    let total = firstStr.length+ secondStr.length+thirdStr.length;
    let average = total/3;
    console.log(total);
    console.log(Math.floor(total/3));
}
calculatedStr('chocolate', 'ice cream', 'cake');