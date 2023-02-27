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
