function solve(inputObj) {
    const outputCar = {
        model: null,
        engine: {},
        carriage: {},
        wheels: [],
    };
    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    let power = Number.MAX_SAFE_INTEGER;
    Object.values(engines).forEach(element => {
        if (Math.abs(inputObj.power - element.power) <= power) {
            power = Math.abs(inputObj.power - element.power);
            outputCar.engine = element;
        }
    });

    outputCar.model = inputObj.model;
    outputCar.carriage = { type: inputObj.carriage, color: inputObj.color };
    let wheelsize = 0;
    if (inputObj.wheelsize % 2 == 0) {
        wheelsize = inputObj.wheelsize - 1;
    } else {
        wheelsize = inputObj.wheelsize;
    }
    outputCar.wheels = Array(4).fill(wheelsize);

    return outputCar;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));