////// Diferite cai de a crea un array
// const li = document.querySelectorAll('li');
// console.log(li);

// const arrNumber = [1,2,3,4]; // Acesta este de baza
// console.log(arrNumber);
// const arrString = ['cooking','cooding','sports'];
// console.log(arrString);

// const arrInstanceOfClassNumber = Array(5,2);
// console.log(arrInstanceOfClassNumber);
// const arrInstanceOfClassString = Array('Gi');
// console.log(arrInstanceOfClassString);

// const arrWithMethodOfNumber = Array.of(2,3,2,2);
// console.log(arrWithMethodOfNumber);

// const arrWithMethodOfString = Array.of('S','D','R');
// console.log(arrWithMethodOfString);

// const arr = Array.from(li)
// console.log(arr);

// const stringInstance = new String('salut');
// console.log(stringInstance);

//// Ce tipuri de date putem stoca intr-un array

// const hobbies = ["Cooking", "Sport"];
// console.log('first state of array: ', hobbies)

// const personalData = [30, "Max", { moreDatail: [1, 2, 3] }];

// const analyticsData = [[1, 1.5], [-4.5, 2.1], 3];

// for (const data of analyticsData) {
//     console.log(data);
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// Add and Remove elements in array with methods
// With pop and push

// let b = hobbies.push('Running', 'Swimming'); // add to last element in array
// console.log(b);
// console.log(hobbies);
// b = hobbies.push('Coding');
// console.log(b)
// console.log(hobbies);
// const a = hobbies.pop();
// console.log(a);
// console.log(hobbies);

// With unshift and shift

// hobbies.unshift('Running','Swimming');
// let b = hobbies.unshift('Coding');
// console.log(b);
// console.log('After unshift: ',hobbies);
// const a = hobbies.shift();
// console.log(a);
// console.log('After shift: ',hobbies);

// Add new element in array in specific range

// const hobbies = ["Cooking", "Sport",];
// // console.log(hobbies[1]);
// hobbies.splice(1, 0, 'Running','Coding', 'Reading'); // to add in specific range
// const a = hobbies.splice(0); // to delete in specific range
// console.log("Elementul sters", a);
// console.log("Array-ul dupa schimbare", hobbies);

// Create copies of array with slice (*in spaceific range);
// const testResult = [1, 1.2, 2, 1.5, 10.99, -5, 10];
// const storedTestResult = testResult.slice();

// storedTestResult.push(5.91);

// console.log(storedTestResult, testResult);

// // Concatinate arrays with .concat
// const testResult = [1, 1.2, 2, 1.5, 10.99, -5, 10];
// const storedTestResult = testResult.concat([11,12,13,14,15.4]);

// storedTestResult.push(5.91);

// console.log(testResult, storedTestResult);

// Retrivering indexes with indexOf and lastIndexOf

// const testResult = [1, 1.2, 1.5, 10.99, 2, -5, 2,10];
// console.log(testResult);
// console.log(testResult.indexOf(100000)); // return -1 (because it`s not found);
// console.log(testResult.indexOf(2)); // return 4 (because it`s first matched element);

// console.log(testResult.lastIndexOf(2));

// find & findIndex

// const personsData = [{name: 'Costea'}, {name: 'Victor'}];
// // console.log(personsData.indexOf({name: 'Victor'}));

// const victor = personsData.find((person, idx, persons) => {
//     return person.name === 'Costea';
// }) // retuneaza elementul care coincide cu rezultatul validarii

// victor.name = 'Marinel' // exemplu ca intoarce elementul in sine, dar nu o copie a elementului

// const victor = personsData.findIndex((person, idx, persons) => {
//     return person.name === 'Costea';
// }) // retuneaza indexul care coincide cu rezultatul validarii

// console.log('Rezultatul ',victor, personData);

// Include

// console.log(testResult.includes(2000)); // returneaza boolean valoare: true daca este acest element in array || false daca nu este

// Alternative for for loops

// forEach

// const numbers = [1,2,3,4];

// for(const number of numbers) {
//     console.log(number);
// };

// numbers.forEach((number, idx) => {
//     console.log(number)
// })

// const prices = [10, 20, 30, 40.5, 3.8];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// for (const price of prices) {
//     taxAdjustedPrice.push(price * (1 + tax))
// };

// prices.forEach((price, idx) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrice.push(priceObj);
// });

// map

// const taxAdjustedPrice = prices.map((price, idx) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
//   });

// console.log(taxAdjustedPrice);

// const numbers = [1,2,3,4];

// const numberDuble = numbers.map((number, idx) => {
//     return number * 2;
// })

// console.log(numberDuble);

// sorting and reversing

// const prices = [10, 2.2, 3.2, 40.5, 3.8];
// // const fruits = ['bannan', 'orange', 'apple', 'kiwi'];
// console.log(prices);
// // console.log(fruits)

// const sortedPrice = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// // const sortedFruits = fruits.sort()
// // const reversedSortedPrice = sortedPrice.reverse();
// // console.log(reversedSortedPrice);
// console.log(sortedPrice);
// // console.log(sortedFruits);

// filter
// const prices = [10, 2.2, 3.2, 40.5, 3.8, 6, 20, 40, 50];

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);
// console.log(prices);

// // reduce
// const prices = [10, 2.2, 3.2, 40.5, 3.8, 6, 20, 40, 50];

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // })

// // console.log(sum);

// const sum = prices.reduce((prevValu, curValue, curIndex, prices) => {
//   return prevValu + curValue;
// }, 0);

// console.log(sum);

// const number = [1,2,3,4,5];
// const evenSquaredNumber = number.filter((number) => number % 2 === 0).map(number => number ** 2).forEach((number => console.log(number)));

// // console.log(evenSquaredNumber);

//split and join

// const data = 'new york;10.99.200;20:40';

// const transformedData = data.split(';');

// console.log(transformedData);

// const nameFragments = ['Bunu', 'Constantin'];
// const names = nameFragments.join(' ');

// console.log(names);

// const nameFragments = ['Bunu', 'Constantin'];
// const copyNameFragments = [...nameFragments];

// console.log(Math.min(...prices));

// copyNameFragments.push('Constantin');

// console.log(nameFragments, copyNameFragments);

// don`t deep copy

// const persons = [{name: 'Victor', age: 25}, {name: 'Manuel', age: 31}];
// const copiedPersons = [...persons];

// persons.push({name: 'Anna', age: 29});
// persons[0].age = 45;

// console.log(persons, copiedPersons);

// const persons = [
//   { name: "Victor", age: 25 },
//   { name: "Manuel", age: 31, hobies: ["sport"] },
// ];
// const copiedPersons = [
//   ...persons.map((person) => ({
//     name: person.name,
//     age: person.age,
//     hobies: [...person.hobies],
//   })),
// ];

// persons.push({ name: "Anna", age: 29 });
// persons[0].age = 45;

// console.log(persons, copiedPersons);



// // Array Destruction 
// const persons = [{name: 'Victor', age: 25}, {name: 'Manuel', age: 31}];
// // const firstObject = persons[0];
// // const secondObject = persons[1];

// const [firstObject, secondObject] = persons;

// console.log(firstObject, secondObject, other);



// Set and Map

// const ids = new Set(['hi','from','set']);

// ids.add(2);
// ids.add(5);
// if(ids.has('hi')) {
//     ids.delete('hi');
// }

// for( const entry of ids.entries()) {
//     console.log(entry);
// }

// console.log(ids.has(1));


// Map

const person1 = {name: 'Costea'};
const person2 = {name: 'Pavel'};

const persondData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
// console.log(persondData);
// console.log(persondData.get(person1))


for(const [key, value] of persondData.entries()) {
    console.log(key);
    console.log(value);
}