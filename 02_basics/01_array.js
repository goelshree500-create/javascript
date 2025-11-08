//IN JS, ARRAY ARE RESIZABLE AND CAN BE OF MIX TYPE(STRING,NUMBER,BOOLEAN)

const arr=[1,2,3,4,6];
const heros=["shaktiman","abs"]
const arr2=new Array(2,3,67,9)

// //ARRAY METHODS
// arr2.push("rajan") 
// console.log(arr2)  
// console.log(arr2.push("rajan"))// giving wrong answer bec push() purpose is to  Adds one or more elements to the original array. and Returns: The new length of the arr

// arr2.pop()
// console.log(arr2)

// arr2.unshift("hello") //insert at starting
// console.log(arr2)
// arr2.shift(); //removes starting element
// console.log(arr2)

// console.log(arr2.includes(2)) //boolean answer 
// console.log(arr2.indexOf(2)) //gives index if element exist otherwise -1

// const newarr=arr2.join()  //change array into string
// console.log(arr2);
// console.log(newarr);
// console.log(typeof newarr)

//slice,splice
// slice does not include range and it does not manipulate the og array 
console.log("a",arr2);
const newArr1=arr2.slice(1,3);
console.log("b",arr2);
console.log(newArr1);

// splice does  include range and it does  manipulate the og array by removing the splice elements from the og array

const newArr2=arr2.splice(1,3);
console.log("c",arr2);
console.log(newArr2);
