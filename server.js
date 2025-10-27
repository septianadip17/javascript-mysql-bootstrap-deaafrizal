const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  database: "db_school",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");

    const sql = "SELECT * FROM user";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
      } else {
        console.log("Hasil database:", results);
      }
    });

    app.get("/", (req, res) => {
      res.send("Welcome to the School Database API"); 
    });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
