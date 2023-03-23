//Variables and Data Types
let name = "Beniamin";
let age = 22;
let isStudent = true;
let favoriteFoods = ["spaghete", "pizza", "mar"];
const person = {
    name: "Beniamin",
    age: 22,
    isStudent: true,
    favoriteFoods: ["spaghete", "pizza", "mar"],
};
console.log(person["name"]);
console.log(person["age"]);
console.log(person["isStudent"]);
console.log(person["favoriteFoods"]);

//Operators
let num1 = 30;
let num2 = "Salut";
alert(num1 + num2); //afiseaza "30Salut"

alert(num1 === num2); // afiseaza "false", deoarece num1 este diferit de num2

//Structural Programming
for(let i=1; i<11; i++) {
    console.log(i);
}

var num3 = 12;
if(num3 % 2 === 0) {
    console.log("este numar par");
} else {
    console.log("este numar impar");
}

//Functions
function add(n1, n2) {
    let result = n1 + n2;
    console.log(result);
}
add(10, 20);

function greet(k) {
    let comentariu = k;
    console.log(comentariu);
}
greet("Salut!");


