const loadButton = document.querySelector("button");

const loadMathLibrary = () => {
  import("./math.js").then((module) => {
    const ans = module.square(5);
    alert("square is " + ans);
  });
};

loadButton.addEventListener("click", loadMathLibrary);
