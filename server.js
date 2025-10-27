const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  database: "db_school",
  user: "root",
  password: "",
});

app.get("/", (req, res) => {
  res.send("Welcome to the School Database API");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
