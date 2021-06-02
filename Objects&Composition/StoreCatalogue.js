function solve(input) {
    const products = {};
    let arrKeys = [];

    input.forEach(element => {
        let currElement = element.split(' : ');
        arrKeys.push(currElement[0]);
        products[currElement[0]] = currElement[1];
    });

    arrKeys.sort();
    let firstChar = arrKeys[0][0];
    let output = `${firstChar}\n`;
    for (let i = 0; i < arrKeys.length; i++) {
        if (arrKeys[i][0] != firstChar) {
            output += `${arrKeys[i][0]}\n`;
            firstChar = arrKeys[i][0];
        }

        output += `  ${arrKeys[i]}: ${products[arrKeys[i]]}\n`;
    }
    return output;
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));