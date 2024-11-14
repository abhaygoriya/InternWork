const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");
const resultEle = document.getElementById("result");

const calculate = (operation) => {
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  let ans;
  switch (operation) {
    case "add":
      ans = value1 + value2;
      break;
    case "sub":
      ans = value1 - value2;
      break;
    case "mul":
      ans = value1 * value2;
      break;
    case "div":
      ans = value1 / value2;
      break;
  }
  input1.value = "";
  input2.value = "";
  showResult(ans);
};

const showResult = (ans) => {
  resultEle.innerHTML = `Result: ${ans}`;
};

addButton.addEventListener("click", () => calculate("add"));
subButton.addEventListener("click", () => calculate("sub"));
mulButton.addEventListener("click", () => calculate("mul"));
divButton.addEventListener("click", () => calculate("div"));
