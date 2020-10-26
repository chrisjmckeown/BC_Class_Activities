const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "wizard_schools_db"
});

// Initiate MySQL Connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

  // Routes  
  app.get("*", function (req, res) {
    const { originalUrl } = req;
    console.log("Original Url: ", originalUrl);
  
    render(res);
  });

  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
});

function render(res) {
  connection.query("SELECT * FROM schools", (err, result) => {
    if (err) return console.log(err + " error");

    let html = "<h1> Magical Schools </h1>";
    html += "<ul>";
    result.forEach(item => {
      html += `<li><p> ID: ${item.id}</p>`;
      html += `<p>School Name: ${item.name}</p></li>`;
    });
    html += "</ul>";

    res.send(html);
  });
}