//Variables and Data Types
let name1 = "Beniamin";
let age = 22;
let isStudent = true;
let favoriteFoods = ["spaghete", "pizza", "mar"];
let keyName = 'name';

// const person = {
//     name: "Beniamin",
//     age: 22,
//     isStudent: true,
//     favoriteFoods: ["spaghete", "pizza", "mar"],
// }; 
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

    // console.log(person1.nume);
    // console.log(person1.age);
    // console.log(person1.isStudent);
    // console.log(person1.favoriteFoods);

// console.log(person1["name"]);
// console.log(person1["age"]);
// console.log(person1["isStudent"]);
// console.log(person1["favoriteFoods"]);

//Operators
// let num1 = 30;
// let num2 = "30";
// alert(num1 + num2); //afiseaza "30Salut"

// alert(num1 === num2); // afiseaza "false", deoarece num1 este diferit de num2

//Structural Programming
// for(let i=1; i<11; i++) {
//     console.log(i);
// }

// var num3 = 12; 
// if(num3 % 2 === 0) {
//     console.log("este numar par");
// } else {
//     console.log("este numar impar");
// }


// putem crea o functie si sa implementam aceasta logica, pentru a face mai dinamic
// const num3 = 2;
// function isEven (num) {
//   if (num % 2 === 0) {
//     console.log("par");
//     return;
//   } else {
//     console.log("impar");
//   }
//   console.log('Finalizarea codului');
// }
// isEven(num3);
// isEven(num3+1);

// Functions
// const result = 20;
// function add(n1, n2) {
//     let result = n1 + n2;
//     return result;
// }

// const result = add(10, 20);
// console.log(result);

// function greet(k) {
//     // in asa caz putem deodata sa folosim valoare din parametru, fara a o asigna la o variabila "console.log(k)"
//     console.log(k);
// }
// greet("Salut!");


