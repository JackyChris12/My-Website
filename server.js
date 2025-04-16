const { error } = require("console");
const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "techbloom",
});

//home routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//about routes
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/services", (req, res) => {
  res.render("services.ejs");
});

app.get("/contacts", (req, res) => {
  res.render("contacts.ejs");
});
app.post("/contacts", express.urlencoded({ extended: true }), (req, res) => {
  console.log(req.body);
  connection.query(
    `INSERT INTO contact (fullname, email, message) VALUE("${req.body.fullname}", "${req.body.email}", "${req.body.message}")`,
    (err) => {
      if (err) {
        res.json(err);
      } else {
        res.send("Submmision succefully recieved");
      }
    }
  );
  /* res.render("contacts.ejs"); */
});

app.listen(8000, () => console.log("Server is running on port 8000"));
