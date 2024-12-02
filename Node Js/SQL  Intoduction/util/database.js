//MySql connectivity
// const mySql = require("mysql2");

// const pool = mySql.createPool({
//   host: "localhost",
//   user: "abhay",
//   database: "node-complete",
//   password: "123456789",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "abhay", "123456789", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
