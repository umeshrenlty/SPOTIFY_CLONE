function myDisplayer(some)
{
    console.log(some);
}
function myCalculator(num1,num2,myCallBack)
{
    let sum=num1+num2;
    myCallBack(sum);
}
/*
In the example above, myDisplayer is the name of a function.

It is passed to myCalculator() as an argument.


When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
*/
myCalculator(4,5,myDisplayer);