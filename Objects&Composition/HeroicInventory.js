function solve(inputArr) {
    let outputArr = [];
    for (const hero of inputArr) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        outputArr.push({ name, level, items });
    }

    console.log(JSON.stringify(outputArr));
}


solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);