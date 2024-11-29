const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(path.dirname(require.main.filename)),
  "The Model View Controller (MVC)",
  "data",
  "products.json"
);

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    if (!fileContent || fileContent.length === 0) {
      return cb([]);
    }

    const products = JSON.parse(fileContent);
    cb(products);
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
