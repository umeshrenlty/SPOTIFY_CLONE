// class person {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//         console.log(`my name is ${this.firstName} ${this.lastName} .my age is ${this.age} and my eye color is ${this.eyeColor}`);
//     }
//     sayHi() {
//         console.log("hiiii......")
//     }
//     static hello()
//     {
//         console.log("hekki..")
//     }
//     static sproperty="something";


// } 
// console.log(person.sproperty);
// let person1 = new person("umesh", "sahoo", 19, "brown");
// person1.sayHi();
// console.log(person1);//static metthod called by class name
// person.hello();

// //All JavaScript objects inherit properties and methods from a prototype.4


// class emp
// {
//     constructor(n)
//     {
//        this.name=n;
//     }
// }
// class manager extends emp
// {
//  constructor(p,d)
//  {
//    super(p);
//    this.department=d;
//  }
// }
// let manager1=new manager("vishwajeet","web development");
// console.log(manager1);





// class Reactangle{
//     constructor(heigth,width)
//     {
//         this.width=width;
//         this.heigth=heigt;
//     }
// }
/*hoisting --an important differnce between function declarations and class declarations is that while functions can be called in code that appears before the are defined,classes must be defined before they can be cosntructed .code like give error 
example---
const p=new reactange();
class Rectangle{}
*/


//class expressions
//without giving name
// let Rectangle=class{
//     constructor(height,width)
//     {
//         this.height=height;
//         this.width=width
//     }
// };
// console.log(Rectangle.name);
// Rectangle=class Rectange2{
//     constructor(height,width)
//     {
//         this.width=width;
//         this.height=height;
//     }

// };
// console.log(Rectangle.name);


// class Rectangle
// {
//     constructor(height,width)
//     {
//         this.height=height;
//         this.width=width;
//     }
 
  
// }
// const square=new Rectangle(10,10);
// console.log(square);

// function DogObject(name, age) {
//     let dog = Object.create(constructorObject);
//     dog.name = name;
//     dog.age = age;
//     return dog;
// }
// let constructorObject = {
//     speak: function(){
//         return "I am a dog"
//     }
// }
// let bingo = DogObject("Bingo", 54);
// console.log(bingo);
let useFullMethod={
    sayHi()
    {
        console.log("hii...");

    },
    sayBye()
    {
        console.log("bye...");
    }
};
class user{
    constructor()
    {
        this.name="unesh"
    }
}
class admin extends user{
  
}
Object.assign(admin.prototype,useFullMethod)
Object.assign(user.prototype,useFullMethod)
let user1=new user();
console.log(user1.sayHi());
console.log(user1.sayBye());
console.log(user1);
let admin1=new admin();
console.log(admin1);