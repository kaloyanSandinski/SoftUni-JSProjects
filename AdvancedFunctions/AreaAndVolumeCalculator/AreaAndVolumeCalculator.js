function solve(area, vol, input) {
    let inputArr = JSON.parse(input);
    let outputArr = [];
    inputArr.forEach(object => {
        outputArr.push({ area: Math.abs(area.call(object)), volume: Math.abs(vol.call(object)) });
    });
    return outputArr;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

console.log(solve(area, vol, '[{ "x": "1", "y": "2", "z": "10" },{ "x": "7", "y": "7", "z": "10" },{ "x": "5", "y": "2", "z": "10" }]'));