const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const app = express();

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index", { name: "lucky",surname: "yoila", age: 20});
});

app.get("/about", (req, res) => {
  res.render("about");
});


const port = 3000;
app.listen(port, () => console.log("Your app is listening on port " + port));
