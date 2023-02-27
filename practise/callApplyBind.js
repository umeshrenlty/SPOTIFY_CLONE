const userDetail = {
  name: "aman gupta",
  age: 24,
  designaton: "software engineer",
  // printDetails:function()
  // {
  //     console.log(this.name);
  // }
};
// userDetail.printDetails();
let userDetail2 = {
  name: "sunil sahoo",
  age: 24,
  designaton: "software engineer",
};
let printDetails = function (state,country) {
  console.log(`my name is ${this.name} from ${state} ${country}`);
}; 
// userDetail.printDetails.call(userDetail2);
//function borrowing
printDetails.apply(userDetail, ["delhi","india"]);
//call funtion is same as apply but the difference is in call we pass
//one bye one argument but in app we pass in array list
let newBind=printDetails.bind(userDetail, "delhi","india");
console.log(newBind());
const ar=[2,4,6];
const newArray=Array.from(ar,number=>number*2);
console.log(newArray);
//object values
const icecreamColor={
  chocalate:'brown',
  vanila:'white',
  strawberry:'red',
}
const colors=Object.values(icecreamColor);
console.log(colors);
//object.keys()
const types=Object.keys(icecreamColor);
console.log(types);

//object.entries()
const weather={
  rain:0,
  temperature:24,
  humidity:33,
}
const entries=Object.entries(weather);
console.log(entries);
//array spread

const spreadableOne=[1,2,3,4];
const spreadableTwo=[5,6,7,8];
const combined=[...spreadableOne,...spreadableTwo];
console.log(combined);

//Remove an array element without mutating the original array.

const spreadableObject={
  name:'umesh',
  phone:'iphone'
};
const newObj={
  ...spreadableObject,
  carModel:'volkswagen'
}
console.log(newObj);

obj=
{
   num:12,
  print:function()
  {
    console.log(this.num);
    return (this.num);
  
  }
}
const n=obj.print();
console.log(n);

const firstObject={
  firstName:'robert'
}
const secondObject={
  lastName:'Cooper'
}

const combinedObject=Object.assign(firstObject,secondObject);
console.log(combinedObject);
