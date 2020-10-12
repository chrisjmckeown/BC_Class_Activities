const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
function userInputs() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    }
  ]);
}

function genHtml(response) {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>${response.username}</h1>
  </body>
  </html>`;
  return html;
}

async function createhtml() {
  try {
    const response = await userInputs();
    const html = genHtml(response);

    await writeFileAsync("index.html", html, "utf8");
    console.log("Successfully");
  } catch (err) {
    console.log(err);
  }
}

createhtml();