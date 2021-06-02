function rectangle(width, height, color) {
    let colorUpper = color.charAt(0).toUpperCase() + color.slice(1);
    const rectangleObj = {
        width: width,
        height: height,
        color: colorUpper,
        calcArea() {
            return width * height;
        }
    }
    return rectangleObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());