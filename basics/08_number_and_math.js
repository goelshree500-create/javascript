const score=900
console.log(score);


const balance=new Number(100);
console.log(balance);
const a=balance.toString()
console.log(a)
console.log(a.length);
console.log(a[0])
console.log(balance.toFixed(2)) // this will throw error as tofixed is used on number not string

//****************mathsssss**************** */
console.log(Math);
console.log(Math.round(78.8))
console.log(Math.ceil(78.8))
console.log(Math.floor(78.8))
console.log(Math.abs(-78.8))
console.log(Math.sqrt(25))
console.log(Math.min(5,6,2,4,5,6))
console.log(Math.max(5,6,2,4,5,6))
console.log(Math.random(5,6,2,4,5,6)) // random value comes always in between 0 and 1


console.log(Math.random());
console.log(Math.random()*10) // so that we can get value greater than 1 as multiplying by 10 shifts 1 decimal point
console.log((Math.random()*10)+1)// because it is possible that number is 0.0674734 so to avoid 0 after decimal we add 1
console.log(Math.floor(Math.random()*10)+1) // to get value without decimal as floor give round off value
console.log(Math.floor(Math.random()*10)+1)


//now to have any number of your range use max and min 
//random no of dice
const max=6
const min=1
console.log(Math.floor(Math.random()*(max-min+1))+min)
