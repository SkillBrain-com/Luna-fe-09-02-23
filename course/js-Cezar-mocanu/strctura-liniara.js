const i = 25;
let j = 20;
console.log(i);
let k;
console.log(j);
k = i + j;
console.log(j);
console.log(k);
k = 25;
j = k;
console.log(k);
console.log(j);

//CORECT: 25 20 20 45 25 25
// 25 20 20 45 25 25
// 25 20 20 45 25 25
// 25 20 20 45 25 25
// 25 20 20 45 25 25
// 25 20 20 45 25 25
// 20 25 20 45 20 25 20
// 25 20 20 45 20 25
// 25 undefined 20 45 25 25
// 25 undefined 20 25 45 25
