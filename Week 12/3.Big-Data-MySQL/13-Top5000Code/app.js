const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "topSongs_db"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId + "\n");
    listAllData();
});

function listAllData() {
    con.query("SELECT * FROM top5000",
        function (err, res) {
            if (err) throw err;
            console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
            res.forEach(line => {
                console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                    + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
            });
            byArtistData();
        });
};

function byArtistData() {
    con.query(
        "Select * FROM top5000 WHERE ?",
        [
            {
                artist: "John Mayer"
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log("-------------------------------");
            console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
            res.forEach(line => {
                console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                    + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
            });
        });
    bySongData();
};

function bySongData() {
    con.query(
        "Select * FROM top5000 WHERE ?",
        [
            {
                song: "Never Let Me Down Again"
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log("-------------------------------");
            console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
            res.forEach(line => {
                console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                    + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
            });
        });
    artistListedMoreThanOnceData();
};

function artistListedMoreThanOnceData() {
    con.query(
        "SELECT *, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 10",
        function (err, res) {
            if (err) throw err;
            console.log("-------------------------------");
            console.log("artist");
            res.forEach(line => {
                console.log(line.artist);
            });
        });
    byRangeData();
};

function byRangeData() {
    con.query(
        "Select * FROM top5000 where raw_total between ? and ?", [30,40]
        ,
        function (err, res) {
            if (err) throw err;
            console.log("-------------------------------");
            console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
            res.forEach(line => {
                console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                    + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
            });
        });
    con.end();
};