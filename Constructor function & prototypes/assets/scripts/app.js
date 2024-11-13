//Task 1
// function Car() {
//   this.company = "Hyundai";
//   this.modal = "Verna";
//   this.year = "2023";
// }

// const car1 = new Car();
// const car2 = new Car();
// const car3 = new Car();

//Task 2
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = () => {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//   };
// }

// const person1 = new Person("Alice", 20);
// const person2 = new Person("Bob", 25);
// const person3 = new Person("Marry", 22);

// person1.greet();
// person2.greet();
// person3.greet();

//Task 3
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Alice", 20);
const person2 = new Person("Bob", 25);
const person3 = new Person("Marry", 22);

person1.greet();
person2.greet();
person3.greet();
