function solve(inputArr) {
    const products = {};

    inputArr.forEach(element => {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(productName)) {
            products[productName] = {};
        }

        products[productName] = products[productName].productPrice <= Number(productPrice) ? products[productName] : { townName, productPrice: Number(productPrice) };
    });
    let result = '';
    for (const key in products) {
        result += (`${key} -> ${products[key].productPrice} (${products[key].townName})\n`)
    }

    console.log(result);
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);