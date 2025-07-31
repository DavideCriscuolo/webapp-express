const mysql = require("mysql2");

require("dotenv").config();
const credentials = {
  host: process.env.DB_H,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
};

const connection = mysql.createConnection(credentials);

console.log(connection);

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connection Success");
  }
});

module.exports = connection;
