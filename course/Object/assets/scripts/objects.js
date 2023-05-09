// let person = {
//     name: 'Constanin',
//     age: 30,
//     hobbies: ['Sport', 'Coding'],
//     greet() {
//         alert('salut');
//     }
// };

// console.log(person);

// // can recrate

// person = {
//     name: 'Constanin',
//     age: 30,
//     hobbies: ['Sport', 'Coding'],
//     greet() {
//         alert('salut');
//     }
// };

// person.age = 29;

// can add on the fly
// person.isAdmin = true;
// console.log(person.isAdmin);

// // functional de validare, unde aflu daca este admin ori nu
// person.isAdmin = true;


// console.log(person.age);
// console.log(person);
// person.greet();


// // delete property
// // person.isAdmin = undefined; // tehnicaly dosen`t exist
// // person.isAdmin = null; 
// delete person.isAdmin
// console.log(person.isAdmin);
// console.log(person);

// 

const keyNameDynamic = 'first name'; 
const userChosenName = 'level';

let person = {
    'first name': 'Constanin',
    [userChosenName]: null,
    age: 30,
    hobbies: ['Sport', 'Coding'],
    greet() {
        alert('salut');
    },
    1: 'value of 0'
};

console.log(person[keyNameDynamic]);
console.log(person['1']);
console.log(person['age']);
console.log(person['first name']);

const movieList = document.getElementById('movie-list');
console.dir(movieList);
console.dir(movieList.style);

// movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';
movieList.style['background-color'] = 'green';