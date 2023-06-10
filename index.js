const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const app = express();

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.get("/", async (req, res) => {
 db.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    // console.log("Users: ", result);
      
    res.render("index", { users: result, });
  });
});

// where the submitted information is posted to from the form
app.post("/register", (req, res) => {
  const { firstname, surname, gender, email, password } = req.body;
  db.query(
    `insert into users(first_name, last_name, gender, email, password) values("${firstname}", "${surname}", "${gender}", "${email}", "${password}")`,
    (err) => {
      if (err) throw err;
    }
  );

  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const port = 3000;
app.listen(port, () => console.log("Your app is listening on port " + port));

module.exports = {
  db,
};
