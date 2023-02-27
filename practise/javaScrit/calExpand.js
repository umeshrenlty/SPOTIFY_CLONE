const radius = [2, 4, 6, 8];
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));
const calculatePeri = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2*Math.PI * radius[i]);
    }
    return output;
};
console.log(calculatePeri(radius));
const calculateDe = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2* radius[i]);
    }
    return output;
};
console.log(calculateDe(radius));

console.log(radius.map(area));
