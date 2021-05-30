function solve(inputObj) {
    if (inputObj.dizziness === true) {
        inputObj.levelOfHydrated += 0.1 * inputObj.weight * inputObj.experience;
        inputObj.dizziness = false;
    }
    return inputObj;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));