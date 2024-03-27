const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  insecureAuth: true,
  database: "dbshutter",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting", err.message);
  } else {
    console.log("Connect established");
  }
});

module.exports = { db };
