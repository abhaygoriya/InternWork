const pattern = document.getElementById("pattern");
pattern.innerHTML = createPattern();

// const sumUp = (resultHandler,operation,...numbers) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number; 
//     }
//     let sum = 0;
//     for(const num of numbers){
//         if (operation == "ADD") {
//             sum += validateNumber(num);    
//         }
//         else {
//             sum -= validateNumber(num);    
//         }
//     }
//     resultHandler(sum);
// }

// const showResult = (messageText, result) => {
//     alert(messageText + '  ' + result);
// }
// sumUp(showResult.bind(this,'The result after adding all numbers is:'),'ADD',1,5,10,6,'fa');
// sumUp(showResult.bind(this,'The result after subtracting all numbers is:'),'SUBTRACT',1,5,10,6,'fa');