// function fibo(n)
// {

// let a=1;
// let b=1;
// let ans;

// for(let i=2;i<n;i++)
// {
//    ans=a+b;
//    console.log(ans);
//    a=b;
//    b=ans;
// }

// }

// fibo(100);

//arrow function
// let a =(n)=> {
//     let a = 1;
//     let b = 1;
    
//     for (let i = 2; i<n; i++) {
//         ans = a + b;
//         a = b;
//         b = ans;
        
//     }
//     return ans
// }
// let b = a(100);
// console.log(b);

// function fibo(n)
// {
//     if(n<=1)
//     return n;
//     let a=fibo(n-2);
    
//     return a+fibo(n-1);
// }

//   console.log(fibo(2500));
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
myFunction();
