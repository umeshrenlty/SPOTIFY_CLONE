let a1={
    name:"umesh",
    age:34,
    skills:
    {
        primary:'full stack',
        secondary:'devOps'  
    }

}
// let a2=Object.assign({},a1);
// let a2=Object.create(a1);
let a2=JSON.parse(JSON.stringify(a1));
a2.age=24;
a1.skills.primary='front End';  
// a2.name="lalit";
console.log(a1);
console.log(a2);

// let a1={
//     name:"umesh",
//     age:34,

// }
// let a2={...a1};
// a2.age=11;
// console.log(a1);
// console.log(a2);