const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.post("/submit", ({body}, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// app.post("/submit", ({body}, res) => {
//   const array = [
//     {username: "Jelly", password: "123456",email:"chris@kiwicodes.com"},
//     {username: "John", password: "abcdefg",email:"chris.j.mckeown@hotmail.com"}
// ];
//   User.insertMany(array)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log("App running on: http://localhost:" + PORT);
});
