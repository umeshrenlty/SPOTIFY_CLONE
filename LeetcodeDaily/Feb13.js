//1523. Count Odd Numbers in an Interval Range
const low=3;
const high=9;
let ans;
if(low%2==1 && high%2==1)
{
    ans=Math.trunc((high-low)/2)+1;
}
else if(low%2==0 && high%2==0)
{
    ans=Math.trunc((high-low)/2);
}
else
{
    ans=Math.trunc((high-low)/2)+1;
}
console.log(ans);