// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// above two system convert in arrow function
const doubleIt = num => num * 2;

var result = doubleIt(5);
console.log(result);

const add = (x, y) => x + y;
console.log(add(5, 3));

const doMath = (x, y) =>{
    const sum = x + y;
    const sub = x - y;
    return sum + sub;
}

const result2 = doMath(10, 2);
console.log(result2);