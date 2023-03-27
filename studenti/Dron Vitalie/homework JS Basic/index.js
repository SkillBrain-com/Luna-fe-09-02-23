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


// este inca o varianta de a asigna valoare la key in object, in loc de a folosi valoare harcoded, putem folosi variabilele de mai sus declarate
// Ca exemplu
    // const person1 = {
    //     name: name1,
    //     age: age,
    //     isStudent: isStudent,
    //     favoriteFoods: favoriteFoods,
    // }

    // La fel, proprietatile se pot chema object.key and object[key], ele sunt la fel, dar diferenta este ca in primul caz lucreaza daca key name este hardwired (am invedere nu apare dinamic) si ii stim numele,
    // iar in a doilea caz se foloseste cind dinamic dorim sa primim valorile de la key, in cazul in care stim key name la proprietate, putem chema valorea cu prima metoda. A doua se foloseste mai des intr-un for-loop
    // sau in alt caz cind dinamic accesam valuare.

    // console.log(person1.name);
    // console.log(person1.age);
    // console.log(person1.isStudent);
    // console.log(person1.favoriteFoods);

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

// putem crea o functie si sa implementam aceasta logica, pentru a face mai dinamic
// function isEven (num) {
//   if (num % 2 === 0) {
//     console.log("par");
//   } else {
//     console.log("impar");
//   }
// }
// isEven(numar);
// isEven(numar+1);


function add(a, b) {
  let suma = a + b;
  console.log(suma);
}
add(1, 2);

function greet(nume) {
  console.log("Salut, " + nume + "!");
}
greet("Ana");
