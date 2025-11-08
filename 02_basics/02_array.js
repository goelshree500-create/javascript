const marvel_hero=["ironman","thor","hulk"];
const dc_hero=["supermen","batman"];
marvel_hero.push(dc_hero) // here dc hero will be taken as element these two array will not merge but second array will become the elemnt of the first array
 console.log(marvel_hero) 
//push does not require new array it push on existing array but concat returns a new array

const new_hero=marvel_hero.concat(dc_hero);       //concat merge two array
 console.log(new_hero)


//nowadays people dont use concat they use spread where elements get spread

const all_hero=[...marvel_hero,...dc_hero]
console.log(all_hero)

const new_arr=[1,2,3,[3,5,6],8,40,[8,9],83,[5],6]
//flat is used to make it in one array we give depth in parameter which we solve array to that depth we can given infinity depth also
const arr=new_arr.flat(Infinity)
console.log(arr)

console.log(Array.isArray("shree"))   //return true or false
console.log(Array.from("shree"))   //convert it in array
console.log(Array.from({name:"shree"})) // we have to mention we want key or value as array otherwise it will give blank[] as answer


//Array.of returns new array from set of elements

let a=123
let b=100
let c=800
console.log(Array.of(a,b,c))
