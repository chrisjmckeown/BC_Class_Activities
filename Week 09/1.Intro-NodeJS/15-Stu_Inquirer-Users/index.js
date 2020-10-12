var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages"
    },
    {
      type: "input",
      message: "What is your preferred method of communciation?",
      name: "communciation"
    }
  ])
  .then(function (response) {

   var json =  JSON.stringify(response);
    fs.writeFile("output.json", json, function(err) {
    
      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });
  });
