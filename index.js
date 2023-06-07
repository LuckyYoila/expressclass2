const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("index", { name: "lucky",surname: "yoila", age: 20});
});

app.get("/about", (req, res) => {
  res.render("about");
});

// app.post('/', (req, res) => {
//     console.log(req.body)

//     res.redirect("/about")
// })

// app.get("/about", (req, res) => {

//     res.sendFile(__dirname + "/html/about.html");
// })

const port = 3000;
app.listen(port, () => console.log("Your app is listening on port " + port));
