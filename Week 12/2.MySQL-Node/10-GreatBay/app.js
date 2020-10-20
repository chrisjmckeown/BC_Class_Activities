const mysql = require("mysql");
const inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "greatbay_db"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId + "\n");
    go();
});

function go() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do want to?",
            name: "selection",
            choices: [
                "Post",
                "Bid",
                "Exit"
            ]
        }
    ]).then(({ selection }) => {
        if (selection === "Post") {
            console.log("Posting an item")
            postAnItem();
        } else if (selection === "Bid") {
            console.log("Bidding on an item")
            bidOnAnItem();
        } else {
            console.log("bye bye")
            con.end();
        }
    });
}

function postAnItem() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the item name?"
        },
        {
            type: "input",
            name: "startingbid",
            message: "What would you like your starting bid to be?",
            validate: (value) => {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then((data) => {
        const { name, startingbid } = data;
        con.query(
            "INSERT INTO items SET ?",
            {
                name: name,
                startingbid: startingbid
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " item inserted!\n");
                go();
            });
    });
}

function bidOnAnItem() {

    con.query("SELECT name, currentbid FROM items", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {

                type: "list",
                message: "Select the item to bid on",
                name: "name",
                choices: [
                    ...res
                ]
            },
            {
                type: "input",
                name: "currentbid",
                message: "What would you like your bid to be?",
                validate: (value) => {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then((data) => {
            const { name, currentbid } = data;
            let bid = 0;
            res.forEach(item => {
                if (item.name === name) {
                    bid = item.currentbid;
                }
            })
            if (bid < currentbid) {
                con.query(
                    "UPDATE items SET ? WHERE ?",
                    [
                        {
                            currentbid: currentbid
                        },
                        {
                            name: name
                        }
                    ],
                    function (err, res) {
                        if (err) throw err;
                        console.log("You are winning the auction!");
                        go();
                    }
                );
            } else {
                console.log("To low, please try again!");
                go();
            }
        });
    });
}