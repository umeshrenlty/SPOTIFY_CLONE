// REDUCER METHOD

/*
THE REDUCER() METHOD EXECUTES A REDUCER FUNCTION (THAT YOU PROVIDE) ON EACH ELEMENT OF THE ARRAY, RESULTING IN SINGLE OUTPUT VALUE

the reducer function takes four arguments

Accumulator
current value
Current Index
source array

arr.reducer(callback(accumulatorm,current,[,index[,Array]]))
[,initialValue]

*/
let arr = [1, 2, 3, 4, 5, 6];
let sum = arr.reduce((aacum, currentValue) => {
  debugger;
  return aacum + currentValue;
});
console.log(sum);
