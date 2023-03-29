let name = "Mihaela";
let age = 40;
let isStudent = false;
let favoriteFoods = ["pizza", "soup", "icecream"]

const person1 = {
    name: Mihaela,
    age: 40,
    isStudent: false,
    favoriteFoods: ["pizza", "soup", "icecream"],
}



let num1 = 5
let num2 = "5"
let z = num1 + num2

//alert (num1 + num2)     //rezultatul este: 55, JS nu face adunarea pentru ca nu poate aduna un numar cu un text
//alert (num1 === num2)   //rezultatul este false, pentru ca num2 este scris ca text ""



for (let i = 1; i <= 10; i++) {
    console.log(i)
}

if (numar % 2 === 0) {
    console.log("par");
} 
else {
    console.log("impar");
}
  


function add(a, b) {
    let  suma = a + b;
    console.log(suma);
}
add(1, 2);
   
function greet(nume) {
    console.log("Hello, " + nume)
}
    greet("Mihaela")
  
 
