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
  database: "u973746243_women_safety",
  host: "109.106.254.101",
  user: "u973746243_safety_root",
  password: "Admin@123",
});

module.exports = connection;
