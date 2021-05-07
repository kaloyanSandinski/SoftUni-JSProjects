function arrOfFlavours(inputArr, startFlavour, endFlavour) {
    let startIndex = inputArr.indexOf(startFlavour);
    let countElementsToRemove = inputArr.indexOf(endFlavour) - startIndex + 1;

    console.log(inputArr.splice(startIndex, countElementsToRemove));
}

arrOfFlavours(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)