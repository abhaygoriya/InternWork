const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const pass = encodeURIComponent("Abhay123Abhay");
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://abhay:${pass}@cluster0.qnjka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
    .then((client) => {
      console.log("Connected to MongoDB Atlas");
      _db = client.db("test");
      callback();
    })
    .catch((err) => {
      console.log("Connection Error: ", err.message);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
