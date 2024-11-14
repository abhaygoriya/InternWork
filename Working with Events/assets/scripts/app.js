//Task 1
const colorInput = document.querySelector("input");
const lables = document.querySelectorAll("label");

colorInput.addEventListener("focusout", () => {
  const body = document.body;
  body.style.backgroundColor =
    colorInput.value.trim() == "" ? "white" : colorInput.value.trim(); //change background color
  colorInput.value = colorInput.value.toUpperCase(); //change into upperCase
  const theme = getComputedColorBrightness();
  theme == "dark" ? () => setLabelColor("white") : () => setLabelColor("black");
});

function setLabelColor(color) {
  console.log("called");
  lables.forEach((label) => {
    label.style.color = color;
  });
}

function getComputedColorBrightness() {
  const color = window.getComputedStyle(document.body).backgroundColor;

  // Extract RGB values from the "rgb(r, g, b)" format
  const rgbValues = color.match(/\d+/g);
  const r = parseInt(rgbValues[0]);
  const g = parseInt(rgbValues[1]);
  const b = parseInt(rgbValues[2]);

  return getRgbBrightness(r, g, b); // Reuse the luminance check function
}

function getRgbBrightness(r, g, b) {
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? "light" : "dark";
}

//Task 2
const secondInput = document.querySelector("input:last-of-type");
console.log(secondInput);
