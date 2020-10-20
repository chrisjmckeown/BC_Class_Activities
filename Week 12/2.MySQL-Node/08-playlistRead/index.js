const mysql = require('mysql');
const inquirer = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "playlist_db"
});

con.connect((err) => {
    if (err) throw err;
    runSearches();
});

function createSong() {
    console.log("Inserting a new song...\n");
    var query = con.query(
        "INSERT INTO songs SET ?",
        {
            title: "Title 10",
            artist: "Title 10",
            genre: "pop"
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " song inserted!\n");
            updateSong();
        }
    );
}

function updateSong() {
    console.log("Updating all song titles...\n");
    var query = con.query(
        "UPDATE songs SET ? WHERE ?",
        [
            {
                title: "hello world"
            },
            {
                genre: "opera"
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " songs updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteSong();
        }
    );
}

function deleteSong() {
    console.log("Deleting all song dance...\n");
    con.query(
        "DELETE FROM songs WHERE ?",
        {
            genre: "dance"
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " songs deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readSongs();
        }
    );
}

function readSongs() {
    console.log("Selecting all songs...\n");
    con.query("SELECT * FROM songs", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        con.end();
    });
}

function runSearches() {
    listAll();
}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "genre",
            message: "What is the genre?"
        }
    ]);
}

function listAll() {
    con.query(`SELECT * FROM songs`, (err, res, fields) => {
        if (err) throw err;

        res.forEach(song => {
            console.log(song.id + " | " + song.title + " | " + song.artist + " | " + song.genre);
        });
        for (var i = 0; i < res.length; i++) {

        }
        console.log("-----------------------------------");

        // const { genre } =  promptUser();
        inquirer
            .prompt({
                message: "Enter genre",
                name: "genre"
            })
            .then(function ({ genre }) {
                search(genre);
            });

    });
}

function search(genre) {
    con.query(`SELECT * FROM songs where genre like '%${genre}%'`, (err, res, fields) => {
        if (err) throw err;

        res.forEach(song => {
            console.log(song.id + " | " + song.title + " | " + song.artist + " | " + song.genre);
        });
        console.log("-----------------------------------");
    });
};