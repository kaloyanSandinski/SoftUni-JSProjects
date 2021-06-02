function solve(input) {
    let outputArr = [];
    let ObjProp = input[0].split('|').filter(x => x != '').map(x => x.trim());

    for (let index = 1; index < input.length; index++) {
        let currElement = input[index].split('|').filter(x => x != '').map(x => x.trim());
        const currObj = {};
        currObj[ObjProp[0]] = currElement[0];
        currObj[ObjProp[1]] = Number(Number(currElement[1]).toFixed(2));
        currObj[ObjProp[2]] = Number(Number(currElement[2]).toFixed(2));
        outputArr.push(currObj);
    }

    return JSON.stringify(outputArr);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));