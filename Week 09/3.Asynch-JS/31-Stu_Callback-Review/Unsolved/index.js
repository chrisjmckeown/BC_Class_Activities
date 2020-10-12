const fs = require("fs");

fs.readFile("animals.json", "utf8", function (err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  console.log(animalJSON);
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  animalJSON.forEach(element => {
    element.species === "dog" ? dogs.push(element) : cats.push(element);
  });
  var dogjson = JSON.stringify(dogs, null, 2);
  var catjson = JSON.stringify(cats, null, 2);

  fs.writeFile("dogs.json", dogjson, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
  fs.writeFile("cats.json", catjson, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
});
