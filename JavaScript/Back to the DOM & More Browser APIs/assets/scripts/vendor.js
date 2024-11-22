//Task 1
const newDivElement = document.createElement("div");
newDivElement.innerHTML = "Second Script Loaded";

document.body.firstElementChild.insertAdjacentElement(
  "afterend",
  newDivElement
);
