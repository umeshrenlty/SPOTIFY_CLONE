import { stringify } from "querystring";

/*
Use the spread (...) syntax
Use the Object.assign() method
Use the JSON.stringify() and JSON.parse() methods
*/
const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
// let p1 = {
//     ...person
// };

// p1.firstName="ueshh";
// console.log(person);

// using  Object.assign() method
let p2 = Object.assign({}, person);
person.firstName="hello";
console.log(p2);
console.log(person);


// using JSON
let p3 = JSON.parse(JSON.stringify(person));

