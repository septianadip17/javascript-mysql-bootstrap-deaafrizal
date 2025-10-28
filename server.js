const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "db_school",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;

  // untuk menampilkan data di browser
  app.get("/", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, results) => {
      const users = JSON.parse(JSON.stringify(results));
      res.render("index", { users: users, title: "User List" });
    });
  });

  // untuk menambahkan data baru ke database
  app.post("/tambah", (req, res) => {
    const insertSql = `INSERT INTO user (nama, kelas) VALUES ('${req.body.nama}','${req.body.kelas}');`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
