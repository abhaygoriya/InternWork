"use strict";
//Task 1 Print Number After Delay
// const delayArr: number[] = [2, 4, 1, 3];
// async function printNumberDelay(arr: number[]) {
//   for (const delay of delayArr) {
//     await printNumber(delay);
//   }
// }
// async function printNumber(delay: number): Promise<void> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(delay);
//       resolve();
//     }, delay * 1000);
//   });
// }
// printNumberDelay(delayArr);
//Task 2 Reject Two Promise
// function createPromise(isResolve: boolean) {
//   return new Promise((resolve, reject) => {
//     if (isResolve) {
//       resolve("Promise Is Resolved");
//     } else {
//       reject(new Error("Promise Is Rejected"));
//     }
//   }).catch((error) => {
//     return error.message;
//   });
// }
// const promiseArr: Promise<any>[] = [];
// for (let index = 1; index <= 10; index++) {
//   promiseArr.push(createPromise(index % 4 !== 0 ? true : false));
// }
// Promise.all([promiseArr]).then((data) => console.log(data));
//Task 3 Which async/sync in foreach and for loop(try to break it).
// async function asyncFunction(id: number): Promise<void> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Async function ${id} completed`);
//       resolve();
//     }, Math.random() * 1000);
//   });
// }
// async function processWithFor() {
//   const delayArr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < delayArr.length; i++) {
//     await asyncFunction(i);
//     if (i === 2) {
//       console.log("Break After Third Iteration");
//       break;
//     }
//   }
//   console.log("Execution Completed");
// }
// async function processWithForeach() {
//   const delayArr = [1, 2, 3, 4, 5];
//   delayArr.forEach(async (id) => {
//     await asyncFunction(id);
//     console.log(`Processed ${id}`);
//     if (id === 3) {
//       console.log("Trying To Break Foreach Loop");
//       return;
//     }
//   });
//   console.log("Execution Completed");
// }
// console.log("For Loop Async/Await");
// processWithFor().then(() => {
//   console.log("ForEach Loop Async/Await");
//   processWithForeach();
// });
//Task 4
function calculation(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
function mainCalculation(str1, str2, calculationFun) {
    return new Promise((resolve, reject) => {
        const ans = calculationFun(str1, str2);
        resolve(ans);
    });
}
mainCalculation("Prominet", "prominet", calculation).then((data) => {
    const res = data ? "Match" : "Not Match";
    console.log(`Output ${res}`);
});
