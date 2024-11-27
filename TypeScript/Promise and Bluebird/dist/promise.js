"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function main(choice) {
    executeChoice(choice);
}
function executeChoice(choice) {
    switch (choice) {
        case "series":
            seriesCall();
            break;
        case "parallel":
            parallelCall();
            break;
        case "waterfall":
            waterfallCall();
            break;
        case "each":
            eachCall();
            break;
        default:
            console.error("Invalid choice");
            break;
    }
}
function seriesCall() {
    return __awaiter(this, void 0, void 0, function* () {
        Promise.all([
            yield task(1, Math.floor(1 * 1000)),
            yield task(2, Math.floor(5 * 1000)),
            yield task(3, Math.floor(3 * 1000)),
        ]).then((_) => console.log("final"));
    });
}
function eachCall() {
    const arr = [
        {
            order: 1,
            delay: 1000,
        },
        {
            order: 2,
            delay: 750,
        },
        {
            order: 3,
            delay: 650,
        },
    ];
    const promiseArr = [];
    for (const ele of arr) {
        promiseArr.push(task(ele.order, ele.delay));
    }
    Promise.all(promiseArr).then((_) => console.log("Finished"));
}
function parallelCall() {
    Promise.all([
        task(1, Math.floor(Math.random() * 1000)),
        task(2, Math.floor(Math.random() * 1000)),
        task(3, Math.floor(Math.random() * 1000)),
    ]).then((_) => console.log("Finished"));
}
function addToTotal(total, add) {
    return new Promise((resolve, reject) => {
        let newTotal = total + add;
        console.log(`${total} + ${add} = ${newTotal}`);
        resolve(newTotal);
    });
}
function waterfallCall() {
    return __awaiter(this, void 0, void 0, function* () {
        let newTotal;
        newTotal = yield addToTotal(0, 5);
        newTotal = yield addToTotal(newTotal, 2);
        newTotal = yield addToTotal(newTotal, 3);
        console.log(newTotal);
        console.log("Finished");
    });
}
function task(order, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Order ${order} and delay ${delay}`);
            resolve();
        }, delay);
    });
}
const choice = prompt("Enter Choice");
main(choice);
