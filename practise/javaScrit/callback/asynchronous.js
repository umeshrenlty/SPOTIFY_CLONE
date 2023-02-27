/*
  i will finish later
  function running in parallel with other function are called asynchronous 
   
  a good example is javascript setTimeout()

 setTimeout(myFunction,3000);
function myFunction()
{
    console.log("i love you");
}
*/ 

setInterval(myFunction,1000);
function myFunction()
{
    let d=new Date();
    console.log(`${d.getHours()} ${d.getMinutes()} ${d.getSeconds()}`); 
}

