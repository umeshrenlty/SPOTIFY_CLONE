function Person(first,last)
{
    this.firstName=first;
    this.lastName=last;
}
// Person.prototype.fullName=function()
// {
//     console.log(this.firstName+" "+this.lastName);
// }
// Person.prototype.age=25;
let person1=new Person("umesh","sahoo",25);
let person2=new Person("lalu","yadav",22);

console.log(person1);
console.log(person2);




// let person1={};
// console.log(person1);
// let person2=
// {
//     name:"umesh",
// };
// console.log(person2);
// console.log(person2.hasOwnProperty('name'));
// function person(n)
// {
//     this.name=n;
// }
// let person3=new person("ajeet");
// console.log(person3);