const strInput = document.querySelector("input");
const reverseButton = document.querySelector("button");

reverseButton.addEventListener("click", () => {
  const reverseStr = reverseString();
  const strgWithoutFirstAndLastChar = stringWithoutFirstAndLastChar();
  alert(
    `Reverse String Is: ${reverseStr}\nString Without First And Last Character: ${strgWithoutFirstAndLastChar}`
  );
  strInput.value = "";
});

function reverseString() {
  const splitStr = strInput.value.split("");
  const reverseStr = splitStr.reverse();
  const joinStr = reverseStr.join("");
  return joinStr;
}

function stringWithoutFirstAndLastChar() {
  const str = strInput.value;
  const newStr = str.substring(1, str.length - 1);
  return newStr;
}
