const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// use express and set port
const app = express();
const PORT = process.env.PORT || 8080;

// set express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set render engine to handlebars with main as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// create the database connection
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "movie_planner_db"
});

// connect
con.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected on id: ${con.threadId}`);
});

// route for get
app.get("/", (req, res) => {
    con.query("SELECT * FROM movies;", (err, data) => {
        if (err) {
            return res.status(500).end();// ending communication
        }
        return res.render("index", { movies: data });
    });
});

// route for post (create)
app.post("/api/movies", (req, res) => {
    con.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], (err, result) => {
        if (err) {
            return res.status(500).end();
        }
        console.log({ id: result.insertId });
        return res.json({ id: result.insertId });
    });
});

// route for put (update)
app.put("/api/movies/:id", (req, res) => {
    con.query("UPDATE movies SET movie = ? WHERE id = ?", [req.body.movie, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        return res.status(200).end();

    });
});

// route for delete
app.delete("/api/movies/:id", (req, res) => {
    con.query("DELETE FROM movies WHERE id = ?", [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        return res.status(200).end();

    });
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});