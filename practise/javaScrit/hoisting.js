// console.log(''||4<0 && '1'!==1);

// console.log('0' || 0 || 5);
// console.log('' || 5);

// let a;
// console.log(a);
//  a=6;
// function print() {
//     function log() {
//       console.log(age);
//     }
  
//     var age = 20;
//     log();
//   }
//   var a;
//   print();

//   console.log(a);
//    a=78;

function priya()
{
  var hoist="hello";
  function hoist()
  {
    console.log("i am");
  } 
  

  return hoist();
}
priya();