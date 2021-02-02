const age = [12, 14, 23, 35, 64];
const age2 = [32, 43, 12, 24, 36];
const allages = age.concat(age2);
const allages2 = [...age, ...age2 ]
console.log(allages2);


const num = [12, 23, 45];
const largest = Math.max(...num);
console.log(largest);