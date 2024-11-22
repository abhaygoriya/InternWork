const storeButton = document.getElementById("store-button");
const retrieveButton = document.getElementById("retrieve-button");

const userID = "123";
const user = {
  name: "Mike",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

storeButton.addEventListener("click", () => {
  document.cookie = `userID=${userID}; max-age=10`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton.addEventListener("click", () => {
  const splitCookie = document.cookie.split(";");
  splitCookie.forEach((i) => {
    console.log(i);
  });
});
