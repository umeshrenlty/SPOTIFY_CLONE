// const body=document.body;
// const div=document.createElement("div");
// // div.innerText="hello umesh"
// div.textContent="hello ji"
// //diff in this
// body.append(div);
// const div=document.querySelector('div');
// const strong= document.createElement('strong')
// strong.innerText='my name us umesh sahoo'
// div.append(strong)
// div.innerHTML="<strong>hello world 2</strong>"
// console.log(div.textContent);
/*
the main difference between textContent and innerText
is that textContent will print that content which is html
file but innerText will print that value which is shown on broswer after putting css
*/
// console.log(div.innerText);

// const body=document.body
// const div=document.querySelector("div")
// const spanHi=document.querySelector("#hi")
// const spanBye=document.querySelector("#bye")
// // console.log(spanBye);
// console.log(spanHi.getAttribute("title"))
// console.log(spanHi.id='helloo')


// event bubbling,capturing
//stop propagation,immediadate propagation & prevent default


//basically bubbling means child to parent
// var div=document.querySelector("div");
// div.addEventListener("click",()=>{
//     console.log("baap")
// })
// var button=document.querySelector("button")
// button.addEventListener("click",(event)=>
// {

//     console.log("beta"); 
// })
// var button1=document.querySelector("button")
// button1.addEventListener("click",(event)=>
// {

//     event.stopImmediatePropagation();
//     //isko run kr lo
//     //aur age rok do
//     console.log("beta1"); 
// })
//for capturing you have to give true value
//defult setting ko change kr skte hai
//prevent default


//INTERSECTION OBSERVER

// setTimeout(function()
// {
//     console.log("timer");
// },5000);

// function x(y)
// {
//     console.log("x");
//     y();
// }
// x(function y()
// {
//     console.log("y");
// });

//hoisting khichna yaa utanan

// hello();
// function hello()
// {
//     console.log("hello world");
// }

//arrow function
// let greet=(user)=>{
//     console.log("hello"+user);
//     return 1;
// }
// let eet=(user)=>1;
//for one statement for returing 1
// console.log(greet('ujmesh'));

//this keyword
// let laptop2=
// {
//     cpu:'i2',
//     ram:19,
//     Broad: 'dell',
//     compare:function(laptop1)
//     {

//     }
    
// }
// let laptop1=
// {
//     cpu:'i9',
//     ram:16,
//     Broad: 'hp',
//     getConfig: function()
//     {
        // console.log('hello world')
    //     console.log(this.cpu);
    // }
// }
// laptop2.getConfig();
// laptop1.getConfig();
// function getFastLaptop(Laptop1,Laptop2)
// {
//     if(Laptop1.cpu>Laptop2.cpu)
//     {
//         console.log(Laptop1);
//     }
//     else{
//         console.log(Laptop2);
//     }
// }
// getFastLaptop(laptop1,laptop2);
// laptop1.compare(laptop2);  


//scope chain
function a()
{
    var b=10;
    c();
    function c()
    {

    }
    c();
}
a();
