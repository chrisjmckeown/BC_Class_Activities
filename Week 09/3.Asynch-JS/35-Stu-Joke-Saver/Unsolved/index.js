const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {

    console.log(res.data);
    
    const joke = res.data.joke;
    console.log(joke);

    appendFileAsync("jokes.txt",joke).then(function() {
      console.log("Successfully wrote to dogs.json file");
    });
  
    // readFileAsync("cats.json", catJSON).then(function() {
    //   console.log("Successfully wrote to cats.json file");
    // });
  });
