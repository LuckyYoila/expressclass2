const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"))

app.get('/', (req, res) => {
    console.log(__dirname)
res.sendFile(__dirname + "/html/index.html");
})

app.post('/', (req, res) => {
    console.log(req.body)
    
    res.redirect("/about")
})

app.get("/about", (req, res) => {

    res.sendFile(__dirname + "/html/about.html");
})

const port = 3000
app.listen(port, ()=> console.log("Your app is listening on port " + port))