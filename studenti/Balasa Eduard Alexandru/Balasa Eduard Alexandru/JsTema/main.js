let name = "Eduard";
let age = 24;
let isStudent = true;
let favoriteFoods = ["fries", "grill", "pizza"];

const person = {
  name: "Eduard",
  age: 24,
  isStudent: true,
  favoriteFoods: ["fries", "grill", "pizza"],
};
console.log(person);

num1 = 25;
num2 = "35";
result = num1 + num2;
console.log(result); // rezultatul primit este "2535";
// num2 fiind un string, rezultat obtinut este un string, nu o valoare numerica;
console.log(num1 === num2); // rezultatul primit este "false";
// acest rezultat este obtinut deoarece valoarea(si tipurile de date) nu este aceeasi in num1 si num2;

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log([i], ["este par"]); // Bunu Constatnin:=> De ce variabila i ai pus in array ?
  } else {
    console.log([i], ["este impar"]);
  }
}
function add(p1, p2) {
  let sum = p1 + p2;
  console.log(sum);
}
add(12, 27);

function greet(message) {
  console.log(message);
}
greet("Salutare!");
