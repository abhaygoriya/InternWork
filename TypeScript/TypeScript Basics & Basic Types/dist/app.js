"use strict";
// Task 1 Find Longest Word
const longestStrInt = document.getElementById("longestStrInput");
const longestStrBtn = document.getElementById("longestStrButton");
function findLongestWord(str) {
    const splitStr = str.split(" ");
    splitStr.sort((a, b) => {
        if (a.length > b.length) {
            return -1;
        }
        else {
            return 1;
        }
    });
    return splitStr[0];
}
longestStrBtn.addEventListener("click", () => {
    const longestStr = findLongestWord(longestStrInt.value.toString());
    alert("Longest Word Is : " + longestStr);
    longestStrInt.value = "";
});
//Task 2
function fun1(str, fun2) {
    console.log(str);
    fun2();
}
function fun2() {
    console.log("Hello World!");
}
fun1("prominentpixel", fun2);
//Task 3
function findUniqueCharacters(str) {
    const splitStr = str.split("");
    const newStrArr = [];
    for (const element of splitStr) {
        if (!newStrArr.includes(element)) {
            newStrArr.push(element);
        }
    }
    const newStr = newStrArr.join("");
    console.log(newStr);
}
findUniqueCharacters("prominentpixel");
