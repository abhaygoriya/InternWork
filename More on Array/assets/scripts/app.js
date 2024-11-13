//Task 1 Pattern
/*for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i ; j++) {
        row += '*';
    }
    console.log(row);
}*/

//Task 2 Sum of all element
// const arr = [1,6,17,70,85];
// let sum = 0;
// for(const ele of arr){
//     sum += ele;
// }
// console.log(sum);

//Task 3
// const arr = [1,6,4,9,8];

// const filterArr = arr.filter((ele) => ele > 5);

// console.log("Filtered Array "+filterArr);

// const mapArr = filterArr.map(ele => ({'num':ele}));
// console.log("Map Array",mapArr);

// const mul = arr.reduce((pre,curr) => pre * curr ,1);
// console.log("Multiplication "+mul);

//Task 4
// function findMax(...arguments){
//   return Math.max(...arguments);
// }

// const maxNumber = findMax(...arr);
// console.log("Maximum Number :",maxNumber);

//Task 5
// function findMax(...arguments){
//     const minMaxArr = [];
//     minMaxArr.push(Math.max(...arguments));
//     minMaxArr.push(Math.min(...arguments));
//     return minMaxArr;
// }

// const [ max, min ] = findMax(...arr);

// console.log("Max",max,"Min",min);

//Task 6
const set = new Set();

set.add(10);
set.add(20);
set.add(10);
set.add(8);

console.log("Set",set);