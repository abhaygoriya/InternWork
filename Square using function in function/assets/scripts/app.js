const squareInput = document.querySelector('#square-input');
const squareButton = document.querySelector('#square-button');
const result = document.getElementById('result');

const createSquareCalculator = (inputValue) => {
    const userInputs = squareInput.value;
    return calculateSquare(userInputs);
}

const calculateSquare = (inputValue) => {
    const square = Math.pow(inputValue,2);
    result.innerHTML =square;
    squareInput.value = "";
}

squareButton.addEventListener('click',() => {
    createSquareCalculator(squareInput.value);
});