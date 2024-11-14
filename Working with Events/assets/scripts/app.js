//Task 1
const colorInput = document.querySelector("input");
const lables = document.querySelectorAll("label");

colorInput.addEventListener("focusout", () => {
  const body = document.body;
  body.style.backgroundColor =
    colorInput.value.trim() == "" ? "white" : colorInput.value.trim(); //change background color

  colorInput.value = colorInput.value.toUpperCase(); //change into upperCase

  const theme = getComputedColorBrightness();
  if (theme === "dark") {
    setLabelColor("white");
  } else {
    setLabelColor("black");
  }
});

function setLabelColor(newColor) {
  lables.forEach((label) => {
    label.style.color = newColor;
  });
}

function getComputedColorBrightness() {
  const color = window.getComputedStyle(document.body).backgroundColor;

  const rgbValues = color.match(/\d+/g);
  const r = parseInt(rgbValues[0]);
  const g = parseInt(rgbValues[1]);
  const b = parseInt(rgbValues[2]);

  return getRgbBrightness(r, g, b);
}

function getRgbBrightness(r, g, b) {
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? "light" : "dark";
}

//Task 2
const secondInput = document.getElementById("pressInput");

secondInput.addEventListener("mousedown", () => {
  secondInput.style.backgroundColor = "red";
  secondInput.classList.remove("highlight-placeholder");
});

secondInput.addEventListener("mouseup", () => {
  secondInput.style.backgroundColor = "green";
  secondInput.classList.add("highlight-placeholder");
});

//Task 3
const languages = ["Java", "PHP", "Angular"];
const dropDown = document.querySelector("select");
languages.forEach((language) => {
  const labelEle = document.createElement("option");
  labelEle.innerHTML = language;
  dropDown.appendChild(labelEle);
});

dropDown.addEventListener("change", (event) => {
  alert(`select language is ${event.target.value}`);
});
