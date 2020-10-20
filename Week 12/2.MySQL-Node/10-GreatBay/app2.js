const mysql = require('mysql');
const inquirer = require('inquirer');
const { async } = require('rxjs');
const { promisify } = require('util');

const databaseConfig = {
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "greatbay_db"
};

const pool = mysql.createPool(databaseConfig);

async function removeItem(id) {
    return new Promise((resolve) => {
        pool.query('DELETE FROM items WHERE id=' + id, (error) => {
            resolve({ result: !error });
        });
    });
}

async function addItem(name, startingbid) {
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
run();
async function run(){    
    const { selection :ans1 } = await selections();
    console.log(ans1);
    const answer = await addItem("test", 10);
    console.log(answer);
    const { selection: ans2 } = await selections();
    console.log(ans2);
}

// const promiseQuery = promisify(pool.query).bind(pool);
// const promisePoolEnd = promisify(pool.end).bind(pool);
// run();

function selections() {
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

// function insert(name, startingbid) {
//     "INSERT INTO items SET ?",
//     {
//         name: name,
//         startingbid: startingbid
//     }
// }

// async function run() {
//     // const query = `select * from items;`
//     const { selection } = await selections();
//     const result = await promiseQuery(insert("test", 10))
//     console.log(result);

//     await promisePoolEnd();
// }


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + con.threadId + "\n");
//     go();
// });

// function go() {
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "Do want to?",
//             name: "selection",
//             choices: [
//                 "Post",
//                 "Bid",
//                 "Exit"
//             ]
//         }
//     ]).then(({ selection }) => {
//         if (selection === "Post") {
//             console.log("Posting an item")
//             postAnItem();
//         } else if (selection === "Bid") {
//             console.log("Bidding on an item")
//             bidOnAnItem();
//         } else {
//             console.log("bye bye")
//             con.end();
//         }
//     });
// }

// function postAnItem() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the item name?"
//         },
//         {
//             type: "input",
//             name: "startingbid",
//             message: "What would you like your starting bid to be?",
//             validate: (value) => {
//                 if (isNaN(value) === false) {
//                     return true;
//                 }
//                 return false;
//             }
//         }
//     ]).then((data) => {
//         const { name, startingbid } = data;
//         con.query(
//             "INSERT INTO items SET ?",
//             {
//                 name: name,
//                 startingbid: startingbid
//             },
//             function (err, res) {
//                 if (err) throw err;
//                 console.log(res.affectedRows + " item inserted!\n");
//                 go();
//             });
//     });
// }

// function bidOnAnItem() {

//     con.query("SELECT name, currentbid FROM items", function (err, res) {
//         if (err) throw err;
//         inquirer.prompt([
//             {

//                 type: "list",
//                 message: "Select the item to bid on",
//                 name: "name",
//                 choices: [
//                     ...res
//                 ]
//             },
//             {
//                 type: "input",
//                 name: "currentbid",
//                 message: "What would you like your bid to be?",
//                 validate: (value) => {
//                     if (isNaN(value) === false) {
//                         return true;
//                     }
//                     return false;
//                 }
//             }
//         ]).then((data) => {
//             const { name, currentbid } = data;
//             let bid = 0;
//             res.forEach(item => {
//                 if (item.name === name) {
//                     bid = item.currentbid;
//                 }
//             })
//             if (bid < currentbid) {
//                 con.query(
//                     "UPDATE items SET ? WHERE ?",
//                     [
//                         {
//                             currentbid: currentbid
//                         },
//                         {
//                             name: name
//                         }
//                     ],
//                     function (err, res) {
//                         if (err) throw err;
//                         console.log("You are winning the auction!");
//                         go();
//                     }
//                 );
//             } else {
//                 console.log("To low, please try again!");
//                 go();
//             }
//         });
//     });
// }