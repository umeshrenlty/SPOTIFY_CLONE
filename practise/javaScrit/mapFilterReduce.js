const arr=[5,1,3,2,6];

//double-[10,2,6,4,12]

//triple-[15,3,9,6,18]

//binary-["101","1","11","10","110"]
function double(x)
{
    return x*2;
}

const output=arr.map(double);
console.log(output);
console.log(arr.map(function binary(x)
{
    return x.toString(2);
}));
//---------------FILTER-----------------------=
function isOdd(x)
{
    return x%2;
}
const fil=arr.filter((x)=>   
{
    return x%2;
});
//filter odd values
console.log(fil);
function isEven(x)
{
    return x%2===0;
}
const filEven=arr.filter(isEven);
//filter odd values
console.log(filEven);








//----------------REDUCE-----------------------

function findSum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
console.log(findSum(arr));
const ans=function(acc,curr)
{
    acc=acc+curr;
    return acc;
}
const out=arr.reduce(ans,0);
console.log(out);