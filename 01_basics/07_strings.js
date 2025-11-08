const a="hello";
const b=10;
console.log(a+b); // not preferred
console.log(`my name is ${a} and i am ${b}years old`); // this method is know as string interpolation
const gameName=new String("shreegoel");
console.log(gameName[0]);
console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3))
console.log(gameName.indexOf('r'))

console.log(gameName.substr(1,4)) //(starting index,length)
console.log(gameName.substring(1,4)) // starting point se end se pahle ka substring deta hai (starting,end)
const N="   shreegoel    "
console.log(N);
console.log(N.trim());


const url="https://hello.com/hell@30.com";
console.log(url.replace('@30','-'));

const x=" shree goel";
console.log(x.split(""))