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
  database: "CeTRC47Isc",
  host: "https://remotemysql.com/",
  user: "CeTRC47Isc",
  password: "rLqHV7QV7M",
});

module.exports = connection;
