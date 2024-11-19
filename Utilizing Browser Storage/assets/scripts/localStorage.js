const storeButton = document.getElementById("store-button");
const retrieveButton = document.getElementById("retrieve-button");

const userID = "123";
const user = {
  name: "Mike",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

storeButton.addEventListener("click", () => {
  localStorage.setItem("userID", userID);
  localStorage.setItem("user", JSON.stringify(user));
});

retrieveButton.addEventListener("click", () => {
  const extractedUserId = localStorage.getItem("userID");
  const extractedUser = localStorage.getItem("user");
  console.log("userID", extractedUserId);
  console.log("user", extractedUser);
});
