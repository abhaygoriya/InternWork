const mainDiv = document.body.firstElementChild;

const firstP = document.createElement('p');
const secondP = document.createElement('p');
const thirdP = document.createElement('p');

firstP.innerHTML = `Success doesn't come overnight. It takes hard work, dedication, and the willingness to keep going
    even when things get tough. Every step you take, no matter how small, brings you closer to your goals. Stay focused
     and never give up on your dreams.`;

secondP.innerHTML = `Challenges are a part of life, but they don't define you. What matters most is how you respond to 
    them. Every setback is an opportunity to learn, grow, and become stronger. Keep pushing forward, and you will find 
    success on the other side.`;

thirdP.innerHTML = `Life is a journey full of unexpected twists and turns. It's easy to get caught up in the day-to-day
    rush, but sometimes, it's important to pause and reflect. Appreciate the little things, cherish the moments with 
    loved ones, and remember that happiness is often found in the simplest of things.`;

firstP.style.color = "black";
secondP.style.color = "red";
thirdP.style.color = "blue";

mainDiv.append(firstP,secondP,thirdP);

let person = {name:'Max'};
const persons = new Set();
persons.add(person);

person = null;

console.log(persons);
