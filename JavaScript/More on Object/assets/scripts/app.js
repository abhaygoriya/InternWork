//Task 1
// const originalObject = {
//     key1 : "value1",
//     key2 : "value2",
//     key3 : "value3",
//     key4 : "value4",
// }

// const keys = Object.keys(originalObject);

// const object1 = { [keys[0]] : originalObject[[keys[0]]] };
// const object2 = { [keys[1]] : originalObject[[keys[1]]] };
// const object3 = { [keys[2]] : originalObject[[keys[2]]], [keys[3]] : originalObject[[keys[3]]] };

// console.log("Object 1",object1);
// console.log("Object 2",object2);
// console.log("Object 3",object3);

const objectButton = document.querySelector("button");
const keyInput = document.body.firstElementChild.firstElementChild;
const valueInput = keyInput.nextElementSibling;
const listElement = document.querySelector("ul");

const arr = [];

const addObjectHandler = () => {
  const key = keyInput.value;
  const value = valueInput.value;

  if (key && value) {
    const obj = { [key]: value };
    arr.push(obj);
  } else {
    alert("Enter both key and value");
  }
  showList();
  keyInput.value = "";
  valueInput.value = "";
};

const showList = () => {
  listElement.innerHTML = "";
  for (const ele of arr) {
    const liEle = document.createElement("li");
    const key = Object.keys(ele)[0];
    const value = ele[key];
    liEle.innerHTML = `${key}  ${value}`;
    listElement.appendChild(liEle);
  }
};

objectButton.addEventListener("click", addObjectHandler);
