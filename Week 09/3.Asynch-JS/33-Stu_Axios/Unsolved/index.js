const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios
      .get(queryUrl)
      .then(function (res) {
       let repoNamesStr = "";
        res.data.forEach(element => {
          repoNamesStr += element.name + "\n";
        });
        // const repoNames = res.data.map(item => item.name);
        // const repoNamesStr = repoNames.join("\n");

        fs.writeFile("repos.txt", repoNamesStr, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        });
      });
  });
