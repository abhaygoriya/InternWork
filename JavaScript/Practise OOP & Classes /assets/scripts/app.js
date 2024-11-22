//Task 1
// class Car {
//   constructor(name, modal, weight, color) {
//     this.name = name;
//     this.modal = modal;
//     this.weight = weight;
//     this.color = color;
//     this.isRunning = false;
//   }

//   start() {
//     if (!this.isRunning) {
//       this.isRunning = true;
//       console.log(`${this.name} ${this.modal} has started`);
//     } else {
//       console.log(`${this.name} ${this.modal} is already running`);
//     }
//   }
//   drive() {
//     if (this.isRunning) {
//       console.log(`${this.name} ${this.modal} is now driven`);
//     } else {
//       console.log(`Start the ${this.name} ${this.modal} first before driving`);
//     }
//   }
//   brake() {
//     if (this.isRunning) {
//       console.log(`${this.name} ${this.modal} is braking`);
//     } else {
//       console.log(
//         `${this.name} ${this.modal} is not running. No need to brake.`
//       );
//     }
//   }
//   stop() {
//     if (this.isRunning) {
//       this.isRunning = false;
//       console.log(`${this.name} ${this.modal} is stopped`);
//     } else {
//       console.log(`${this.name} ${this.modal} is already stopped`);
//     }
//   }
// }

// const car = new Car("Toyota", "Camry", 1500, "Blue");

// car.start();
// car.drive();
// car.brake();
// car.stop();

//Task 2
// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius;
//     this.height = height;
//   }

//   calculateVolume() {
//     const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
//     return volume.toFixed(4);
//   }
// }

// const cylinder = new Cylinder(10, 5);
// const volume = cylinder.calculateVolume();

// console.log("Volume of cylinder", volume);

//Task 3
class Book {
  constructor(name, author, isReading) {
    this.name = name;
    this.author = author;
    this.isReading = isReading;
  }
  displayInfo() {
    let readingStatus = this.isReading
      ? "currently being read"
      : "not being read";

    console.log("Book Name:", this.name);
    console.log("Author Name:", this.author);
    console.log("Reading Status:", this.readingStatus);
    console.log("---------------------");
  }

  updateReadingStatus(status) {
    this.isReading = status;
    console.log(
      `${this.name} is now ${this.isReading ? "being read" : "not being read"}`
    );
    console.log("---------------------");
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", true);
const book2 = new Book("1984", "George Orwell", false);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", true);

book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

book2.updateReadingStatus(true);

book2.displayInfo();
