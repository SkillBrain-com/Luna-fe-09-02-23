// class Person exnted AnotherClass {
//     name = 'Costea';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log(`Hi i'm ${this.name} and I am ${this.age} years old`)
//     }
// } // Syntax Sugar:=> constru function + prototypical inheritance

// function Person() {
//   this.age = 30;
//   this.name = "Costea";
//   this.greet = function () {
//     console.log(`Hi i'm ${this.name} and I am ${this.age} years old`);
//   };
// }

// Person.prototype.printAge = function () {
//     console.log(this.age);
// } //  this is manual variant how extend in Class

// const perons = new Person();

// perons.greet();
// console.log(perons);
// console.log(perons.toString());
// console.log(perons.printAge());
// console.dir(Person.prototype);
// console.log(perons.__proto__);

class AgendPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgendPerson {
  name = "Costea";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(`Hi i'm ${this.name} and I am ${this.age} years old`);
  }
}


const perons = new Person();
const person2 = new Person();
    console.log(perons.__proto__)
perons.greet();
console.log(perons);
console.log(perons.toString());
perons.printAge();
console.dir(Person.prototype);
// console.dir(Person.__proto__);
console.log(perons.__proto__);


// setting and getting prototype
const course = {
    title: 'JS',
    rating: 4
} 

Object.setPrototypeOf(course, {
    printRating: function() {
        console.log(this.rating + ' /5');
    }
})
console.log(Object.getPrototypeOf(course));
course.printRating();

