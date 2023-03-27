//Variables and Data Types//
let name = "Apple Robot";
let age = 120;
let isStudent = false;
let favoriteFoods = ["data", "information", "money"];

const person1 = {
    name: "Apple Robot",
    age: 120,
    isStudent: true,
    favoriteFoods: ["data", "information", "money"],
    afisare() {
        console.log(favoriteFoods);
    }
};

//Operators//
let num1 = 23;
let num2 = "21";
alert(num1 + num2);
console.log(num1 + num2); //num1 a fost convertit in string tocmai de asta nu s-au adunat, ci s-au asezat unul langa altul//
alert(num1 === num2); // verifica si egalitatea tipurilor de date si de asta nu sunt egale

//Structural rogramming//

for (let a = 1; a < 11; a++) {
    console.log(a)
}



let b = prompt("Introdu un numar")
b = parseFloat(b);
if (b % 2 == 0) {
    console.log("Numarul este par")
}
else {
    console.log("Numarul este impar")
}



//Functions//
let c = prompt("Introdu un numar pentru adunare")
c = parseFloat(c);
let d = prompt("Introdu al doilea numar pentru adunare")
d = parseFloat(d);
function add(c, d) {
    let result = c + d;
    console.log(result)
    
}
alert(c+d)




function greet(){
    console.log('Salutari cu ocazia primei mele teme JavaScript')
}
greet();