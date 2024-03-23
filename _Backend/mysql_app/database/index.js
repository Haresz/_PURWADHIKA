const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  insecureAuth: true,
  database: "db_kantor",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting", err.message);
  } else {
    console.log("Connection established");
  }
});

module.exports = { db };
