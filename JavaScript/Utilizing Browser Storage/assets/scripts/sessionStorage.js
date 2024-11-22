const storeButton = document.getElementById("store-button");
const retrieveButton = document.getElementById("retrieve-button");

const userID = "123";
const user = {
  name: "Mike",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

storeButton.addEventListener("click", () => {
  sessionStorage.setItem("userID", userID);
  sessionStorage.setItem("user", JSON.stringify(user));
});

retrieveButton.addEventListener("click", () => {
  const extractedUserId = sessionStorage.getItem("userID");
  const extractedUser = sessionStorage.getItem("user");
  console.log("userID   ", extractedUserId);
  console.log("user", extractedUser);
});
