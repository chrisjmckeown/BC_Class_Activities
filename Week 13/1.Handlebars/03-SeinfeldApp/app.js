const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

    // Routes  
    app.get("/cast", (req, res) => {
        connection.query("SELECT * FROM actors ORDER BY id", (err, result) => {
            if (err) throw err;

            let html = "<h1> Seinfeld Cast </h1>";
            html += `<a href="/cast">Cast</a>  `;
            html += `<a href="/coolness-chart">Coolness Chart</a>  `;
            html += `<a href="/attitude-chart/relaxed">Attitude Chart Relaxed</a>  `;
            html += `<a href="/attitude-chart/righteous">Attitude Chart Righteous</a>  `;
            html += `<a href="/attitude-chart/doofus">Attitude Chart Doofus</a>  `;
            html += `<a href="/attitude-chart/selfish">Attitude Chart Selfish</a>  `;
            html += "<ul>";
            result.forEach(item => {
                html += `<li>Name: ${item.name}</li>`;
            });
            html += "</ul>";

            res.send(html);
        });
    });
    app.get("/coolness-chart", (req, res) => {
        connection.query("SELECT * FROM actors ORDER BY coolness_points", (err, result) => {
            if (err) throw err;

            let html = "<h1> Seinfeld Cast Coolness Chart </h1>";
            html += `<a href="/cast">Cast</a>  `;
            html += `<a href="/coolness-chart">Coolness Chart</a>  `;
            html += `<a href="/attitude-chart/relaxed">Attitude Chart Relaxed</a>  `;
            html += `<a href="/attitude-chart/righteous">Attitude Chart Righteous</a>  `;
            html += `<a href="/attitude-chart/doofus">Attitude Chart Doofus</a>  `;
            html += `<a href="/attitude-chart/selfish">Attitude Chart Selfish</a>  `;
            html += "<ul>";
            result.forEach(item => {
                html += `<li>ID: ${item.id} Name: ${item.name} Coolness: ${item.coolness_points} Attitude: ${item.attitude}</li>`;
            });
            html += "</ul>";

            res.send(html);
        });
    });
    app.get("/attitude-chart/:att", (req, res) => {
        const att = req.params.att;
        connection.query("SELECT * FROM actors WHERE attitude = ?", [att], (err, result) => {
            if (err) throw err;

            let html = "<h1> Seinfeld Cast </h1>";
            html += `<a href="/cast">Cast</a>  `;
            html += `<a href="/coolness-chart">Coolness Chart</a>  `;
            html += `<a href="/attitude-chart/relaxed">Attitude Chart Relaxed</a>  `;
            html += `<a href="/attitude-chart/righteous">Attitude Chart Righteous</a>  `;
            html += `<a href="/attitude-chart/doofus">Attitude Chart Doofus</a>  `;
            html += `<a href="/attitude-chart/selfish">Attitude Chart Selfish</a>  `;
            html += "<ul>";
            result.forEach(item => {
                html += `<li><p>School Name: ${item.name}</p></li>`;
            });
            html += "</ul>";

            res.send(html);
        });
    });
    app.get("*", (req, res) => {
        let html = "<h1> Incorrect URL </h1>";
        html += `<a href="/cast">Cast</a>  `;
        html += `<a href="/coolness-chart">Coolness Chart</a>  `;
        html += `<a href="/attitude-chart/relaxed">Attitude Chart Relaxed</a>  `;
        html += `<a href="/attitude-chart/righteous">Attitude Chart Righteous</a>  `;
        html += `<a href="/attitude-chart/doofus">Attitude Chart Doofus</a>  `;
        html += `<a href="/attitude-chart/selfish">Attitude Chart Selfish</a>  `;
        res.send(html);
    });

    app.listen(PORT, () => {
        console.log("Server listening on: http://localhost:" + PORT);
    });

});

function render(res) {
}