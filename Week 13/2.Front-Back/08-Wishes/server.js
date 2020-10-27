const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

// use express and set port
const app = express();
const PORT = process.env.PORT || 8080;

// set express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set render engine to handlebars with main as the default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// create the database connection
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "wishes_db"
});

// connect
con.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected on id: ${con.threadId}`);
});

// routes for get
app.get("/", (req, res) => {
    con.query('SELECT * FROM wishes', (err, data) => {
        if (err) return console.error(err);
        res.render('index', { wishes: data });
    });
});

// routes for post
app.post("/", (req, res) => {
    con.query('INSERT INTO wishes SET ?',
        {
            wish: req.body.wish
        }, 
        (err, data) => {
            if (err) return console.error(err);
            res.redirect('/');
        });
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});