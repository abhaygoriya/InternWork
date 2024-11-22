//print name before surname
// const main = async () => {
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Abhay");
//       resolve();
//     }, 5000);
//   });
//   console.log("Goriya");
// };
// main();

//Print 1 to 10 in setInterval
// let i = 1;
// const inter = setInterval(() => {
//   if (i == 10) {
//     clearInterval(inter);
//   }
//   console.log(i);
//   i++;
// }, 1000);

// Iterate object with path
// const obj = {
//   name: "abhay",
//   age: 20,
//   address: {
//     pincode: 363641,
//     country: "india",
//     add: { pincode: 363642, country: "bharat" },
//   },
// };

// function findKey(obj, objKey) {
//   for (const key in obj) {
//     let newkey = objKey + "." + key;
//     if (typeof obj[key] != "object") {
//       console.log(newkey, obj[key]);
//     } else {
//       findKey(obj[key], newkey);
//     }
//   }
// }
// findKey(obj, "obj");
// Number.isInteger(1212.121);

//Iterate array or object
// const mixedArrayValues = [
//   { id: 1, value: { name: "Item A", price: 10.5 } },
//   { id: 2, value: [1, 2, 3, 4] },
//   { id: 3, value: { name: "Item B", price: 20.0, category: "Books" } },
//   { id: 4, value: [5, 6, 7, 8] },
// ];

// function findArrayOrObject(elements) {
//   const keys = Object.keys(elements);
//   for (const key of keys) {
//     if (typeof elements[key] != "object") {
//       console.log(elements[key]);
//     } else {
//       findArrayOrObject(elements[key]);
//     }
//   }
// }
// findArrayOrObject(mixedArrayValues);

// count of char in array
// const words = ["banana", "Apple", "cherry tomato", "Date"];
// const newArr = words.map((word) => word.toLocaleLowerCase());

// const arr = words.reduce((accumelatorValue, currentValue) => {
//   for (const char of currentValue) {
//     if (accumelatorValue[char]) {
//       accumelatorValue[char]++;
//     } else {
//       accumelatorValue[char] = 1;
//     }
//   }
//   return accumelatorValue;
// }, {});
// console.log(arr);

// console.log(newArr); // Output: ['Apple', 'banana', 'cherry', 'Date']

const map = async () => {
  await printName();
  console.log("Cena");
};

async function printName() {
  return setTimeout(() => console.log("John"), 3000);
}
map();
