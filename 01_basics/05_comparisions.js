console.log(2>7)
console.log(2<7)
console.log(2==7)
console.log(2>=7)
console.log(2<=7)

console.log("2"<7)
console.log(2>"7")
console.log("7"=="8")
console.log(2=="2")


console.log(null>0)
console.log(null==0)
console.log(null>=0)  

// equity check == and comparision check <,>,>=,<= works differently

// comparision convert null to Number,treating it zero.thats why (3) null>=0 is true and (1) null>0 is false and (2) null==0 is false 

//STRICT CHECK (===) it also checks the datatype

console.log("6"==6) //true
console.log("6"===6) //false (stict check)
 


console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)  
// undefined give false all the time        