const mysql = require('mysql');
const inquirer = require('inquirer');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "topSongs_db"
};

const pool = mysql.createPool(databaseConfig);

function selectionPrompt() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Do want to?",
            name: "selection",
            choices: [
                "List all",
                "By Artist",
                "By Artist with Album",
                "By Song",
                "Listed more than 10 times",
                "By Range",
                "Exit"
            ]
        }
    ]);
}

function artistNameInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the artists name?"
        }
    ]);
}

function songNameInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the song name?"
        }
    ]);
}

function getRangeInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "lower",
            message: "What is the lower range?",
            validate: (value) => {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            name: "upper",
            message: "What is the upper range?",
            validate: (value) => {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]);
}

run();
async function run() {
    while (true) {
        const { selection } = await selectionPrompt();
        switch (selection) {
            case "List all":
                await listAllData();
                break;
            case "By Artist":
                const { name: artist } = await artistNameInput();
                await getByArtist(artist);
                break; 
            case "By Artist with Album":
                const { name: artist2 } = await artistNameInput();
                await getByArtistWithAlbum(artist2);
                break;
            case "By Song":
                const { name: song } = await songNameInput();
                await getBySong(song);
                break;
            case "Listed more than 10 times":
                await getMultiList10();
                break;
            case "By Range":
                const { lower, upper } = await getRangeInput();
                await getbyRange(lower, upper);
                break;
            default:
                pool.end();
                return;
        }
    }
}

async function listAllData() {
    return new Promise((resolve) => {
        pool.query("SELECT * FROM top5000",
            (err, res) => {
                if (err) throw err;
                console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
                res.forEach(line => {
                    console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                        + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
                });
                resolve({ result: !err });
            });
    });
}

async function getByArtist(name) {
    return new Promise((resolve) => {
        pool.query(
            "Select * FROM top5000 WHERE ?",
            [
                {
                    artist: name
                }
            ],
            (err, res) => {
                if (err) throw err;
                console.log("-------------------------------");
                console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
                res.forEach(line => {
                    console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                        + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
                });
                resolve({ result: !err });
            });
    });
}

async function getByArtistWithAlbum(name) {
    return new Promise((resolve) => {
        var query = "SELECT top5000.artist as test, top5000.song, albums.ablum, albums.year ";
        query += "FROM top5000 INNER JOIN albums ON (top5000.artist = albums.artist AND top5000.year = albums.year) ";
        query += "WHERE (top5000.artist = ?) ORDER BY albums.year";
        pool.query(query, [name],
            (err, res) => {
                if (err) throw err;
                console.log("-------------------------------");
                console.log(res.length + " matches found!");
                console.log("-------------------------------");
                console.log("artist | song | album | year");
                res.forEach(line => {
                    console.log(line.test + " | " + line.song + " | " + line.ablum + " | " + line.year);
                });
                resolve({ result: !err });
            });
    });
}

async function getBySong(name) {
    return new Promise((resolve) => {
        pool.query(
            "Select * FROM top5000 WHERE ?",
            [
                {
                    song: name
                }
            ],
            (err, res) => {
                if (err) throw err;
                console.log("-------------------------------");
                console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
                res.forEach(line => {
                    console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                        + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
                });
                resolve({ result: !err });
            });
    });
}

async function getMultiList10() {
    return new Promise((resolve) => {
        pool.query(
            "SELECT *, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 10",
            (err, res) => {
                if (err) throw err;
                console.log("-------------------------------");
                console.log("artist");
                res.forEach(line => {
                    console.log(line.artist);
                });
                resolve({ result: !err });
            });
    });
}

async function getbyRange(lower, upper) {
    return new Promise((resolve) => {
        pool.query(
            "Select * FROM top5000 where raw_total between ? and ?", [lower, upper]
            ,
            (err, res) => {
                if (err) throw err;
                console.log("-------------------------------");
                console.log("ranking | artist | song | year | raw_total | raw_usa | raw_uk | raw_eur | raw_row");
                res.forEach(line => {
                    console.log(line.ranking + " | " + line.artist + " | " + line.song + " | " + line.year
                        + " | " + line.raw_total + " | " + line.raw_usa + " | " + line.raw_uk + " | " + line.raw_eur + " | " + line.raw_row);
                });
                resolve({ result: !err });
            });
    });
}