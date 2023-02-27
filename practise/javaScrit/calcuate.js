const radius = [2, 4, 6, 8];
const area = function (radius) {
    return (Math.PI * radius * radius);
}
const perimeter = function (radius) {
    return (2 * Math.PI * radius);
}
const diameter = function (radius) {
    return (2 * radius);
}


const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};


Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, diameter));
console.log(calculate(radius, perimeter));
console.log(radius.map(area));
console.log(calculate(radius, area));
console.log(radius.calculate(area));
