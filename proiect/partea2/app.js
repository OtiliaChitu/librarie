
var express = require("express");
var app = express();

const session = require("express-session");
const formidable = require("formidable");
const fs = require("fs");
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(
  session({
    secret: "abcdefg",
    resave: true,
    saveUninitialized: false,
  })
);

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/acasa.html"); // pagina principala
  res.render("login");
});

app.get("/login", function (req, res) {
  res.render("login"); // render pagina de login
});

app.post("/login", function (req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const user = checkUser(fields.username, fields.parola);
    if (user) {
      req.session.username = user;
      res.sendFile(__dirname + "/acasa.html"); // inapoi la acasa dupa login
    } else {
      req.session.username = false;
       res.redirect("/login");       // inapoi la login daca nu e bine
      // res.sendFile(__dirname + "/acasa.html"); 
    }
  });
});

app.get("/logout", function (req, res) {
  req.session.username = false;
  res.redirect("/"); // inapoi la login dupa logout
});

function checkUser(username, password) {
  if (fs.existsSync("users.json")) {
    const data = fs.readFileSync("users.json");
    const users = JSON.parse(data);

    for (let i in users) {
      if (users[i].username == username && users[i].parola == password) {
        return username;
      }
    }
  }
  return false;
}

app.use(function (req, res, next) {
  res.status(404).render("404");
});

app.listen(5000, () => {
  console.log("App is running on port 5000!");
});

