const mysql = require("mysql");
require("dotenv").config();

const dbconfig = {
  host: process.env.DB_HOST_LIVE,
  user: process.env.DB_USER_LIVE,
  database: process.env.DB_NAME_LIVE,
  password: process.env.DB_PASSWORD,
};

var connection;

connection = mysql.createConnection({
  port: 2222,
  database: "subratat_mysql",
  host: "192.168.0.100",
  user: "subratat_php",
  password: "Admin@123",
  connectionLimit: 10,
  acquireTimeout: 30000, //30 secs
  ssl: false,
});
connection.connect(function (err) {
  if (err) {
    console.log("CONNECTION ERROR", JSON.stringify(err));
  } else {
    console.log("CONNECTED");
  }
});
module.exports = connection;
