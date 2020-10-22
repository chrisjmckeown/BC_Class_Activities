const mysql = require('mysql');
const inquirer = require('inquirer');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "greatbay_db"
};

const pool = mysql.createPool(databaseConfig);

async function createAuction(name, startingbid) {
    return new Promise((resolve) => {
        pool.query('INSERT INTO items SET ?',
            {
                name: name,
                startingbid: startingbid
            }, (error) => {
                resolve({ result: !error });
            });
    });
}

async function placeBid(name, currentbid) {
    return new Promise((resolve) => {
        pool.query('UPDATE items SET ? WHERE ?', [
            {
                currentbid: currentbid
            },
            {
                name: name
            }], (error) => {
                resolve({ result: !error });
            });
    });
}

async function getAllItems() {
    return new Promise((resolve) => {
        pool.query("SELECT name, currentbid FROM items",
            (error, data) => {
                resolve({ result: !error, data });
            });
    });
}

run();
async function run() {
    while (true) {
        const { selection } = await selectionPrompt();
        switch (selection) {
            case "Post":
                const { name: newItem, startingbid } = await auctionDetailPrompt();
                const result = await createAuction(newItem, startingbid);
                if (result) { console.log(`${newItem} added to the Auction!`); }
                break;
            case "Bid":
                const { data: auctionItems } = await getAllItems();
                const { name: selectedItem, currentbid } = await bidDetailPrompt(auctionItems);
                let bid = 0;
                auctionItems.forEach(item => {
                    if (item.name === selectedItem) {
                        bid = item.currentbid;
                    }
                })
                if (bid < currentbid) {
                    const result = await placeBid(selectedItem, currentbid);
                    if (result) { console.log(`You are winning the auction with a bid of ${currentbid}`); }
                } else {
                    console.log(`To low, the current bid is ${bid}`);
                }
                break;
            default:
                pool.end();
                return;
        }
    }
}

function selectionPrompt() {
    return inquirer.prompt([
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
    ]);
}

function auctionDetailPrompt() {
    return inquirer.prompt([
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
    ]);
}

function bidDetailPrompt(auctionItems) {
    return inquirer.prompt([
        {
            type: "list",
            message: "Select the item to bid on",
            name: "name",
            choices: [
                ...auctionItems
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
    ]);
}