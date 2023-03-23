let nume = "Ion";
let age = 20;
let isStudent = true;
let favoriteFoods = ["cioba", "cartofi", "orez"];

const persoana1 = {
  nume: "Ion",
  age: 20,
  isStudent: true,
  favoriteFoods: "ciorba",
};
console.log(persoana1["nume"]);
console.log(persoana1["isStudent"]);

let num1 = 10;
let num2 = "10";
//alert (num1 + num2)     //rezultatul este: 1010, am primit acest rezultat deoarece un numar nu poate fi scris intre ""
//alert (num1 === num2)   //rezultatul este false, am primit acest rezultat deoacere num2 este scris intre ""

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

let numar = 7;

if (numar % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}
