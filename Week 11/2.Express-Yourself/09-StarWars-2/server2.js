// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/:character", (req, res) => {
  var chosen = req.params.character;

  // What does this log?
  console.log(chosen);
  const found = characters.some(char => char.name === chosen);

  if (found) {
    res.json(characters.filter(char => char.name === chosen));
  } else {
    res.status(400).json({ msg: `No character with the name of ${chosen}, please try again` });
  }

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
