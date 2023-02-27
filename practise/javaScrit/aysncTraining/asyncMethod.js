let test= async ()=>"hello";

test().then((result)=>{
    console.log(result);
});

await method
async function test()
{
    console.log("a1");
    const response=await fetch("student_data.json");
    
    console.log("b2");
    const students=await response.json();
    return students
}
test().then((res)=>
{
console.log(res);
}).catch((error)=>
{
console.log(error);
});
