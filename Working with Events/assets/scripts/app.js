const inputEle = document.querySelector("input");
const lableEle = document.querySelector("label");

inputEle.addEventListener("focusout", () => {
  const body = document.body;
  body.style.backgroundColor =
    inputEle.value.trim() == "" ? "white" : inputEle.value.trim(); //change background color
  inputEle.value = inputEle.value.toUpperCase(); //change into upperCase
  const theme = getComputedColorBrightness();
  theme == "dark"
    ? (lableEle.style.color = "white")
    : (lableEle.style.color = "black");
});

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
