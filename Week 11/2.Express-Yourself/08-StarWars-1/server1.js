// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
var obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 200,
  forcePoints: 1800
};
//

// Routes
// ===========================================================
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", (req, res) => {
  res.json(yoda);
});

app.get("/darthmaul", (req, res)  => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

app.get("/obiwankenobi", (req, res)  => {
  res.json(obiwankenobi);
});

// Listener
// ===========================================================
app.listen(PORT, () =>{
  console.log("Server listening on: http://localhost:" + PORT);
});
