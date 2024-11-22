//Task 1
const firstDiv = document.body.firstElementChild;
const loadButton = document.getElementById("loadButton");
firstDiv.innerHTML = "First Script Loaded";

function loadScript() {
  const newElement = document.createElement("script");
  newElement.src = "assets/scripts/vendor.js";
  newElement.defer = true;
  document.head.appendChild(newElement);
}

loadButton.addEventListener("click", loadScript);

//Task 2
const parentDiv = document.getElementById("parentDiv");
const childDiv = document.getElementById("childDiv");
const scrollableBox = document.getElementById("scrollableBox");
const scrollToButton = document.body.lastElementChild.previousElementSibling;
const scrollByButton = document.body.lastElementChild;
const scrollPara = document.getElementById("scrollPara");

const childRect = childDiv.getBoundingClientRect();

const disParentDiv = childRect.top - childDiv.offsetTop;

console.log(disParentDiv);

function scrollToHandler() {
  scrollableBox.scrollTo({
    top: 100,
    behavior: "smooth",
  });
}

function scrollByHandler() {
  scrollableBox.scrollBy({
    top: 100,
    behavior: "smooth",
  });
}

scrollToButton.addEventListener("click", scrollToHandler);
scrollByButton.addEventListener("click", scrollByHandler);

//Task 3
const newPElement = document.createElement("p");
newPElement.innerHTML = "New P Element";
newPElement.setAttribute("data-class-info", "random class");
document.body.appendChild(newPElement);
