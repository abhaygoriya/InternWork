const storeButton = document.getElementById("store-button");
const retrieveButton = document.getElementById("retrieve-button");

const dbRequest = indexedDB.open("StorageDummy", 1);
let db;

storeButton.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
    tags: ["Expensive", "Luxury"],
  });

  request.onsuccess = function () {
    console.log("Product added successfully");
  };

  request.onerror = function () {
    console.log("Error adding product.");
  };
});

retrieveButton.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function () {
    console.log(request.result);
  };
});

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  if (!db.objectStoreNames.contains("products")) {
    const objStore = db.createObjectStore("products", { keyPath: "id" });
    console.log("Object store 'products' created.");
  }
};

dbRequest.onsuccess = function (event) {
  db = event.target.result;
  const transaction = db.transaction("products", "readwrite");
  const productStore = transaction.objectStore("products");
  const product = {
    id: "p1",
    title: "A First Product",
    price: 12.99,
    tags: ["Expensive", "Luxury"],
  };
  const request = productStore.add(product);

  request.onsuccess = function () {
    console.log("Product added successfully");
  };

  request.onerror = function () {
    console.log("Error adding product.");
  };

  transaction.onsuccess = function () {
    console.log("Transaction completed successfully.");
  };

  transaction.onsuccess = function () {
    console.log("Error with transaction.");
  };
};

dbRequest.onerror = () => {
  console.log("Error opening IndexedDB.");
};
