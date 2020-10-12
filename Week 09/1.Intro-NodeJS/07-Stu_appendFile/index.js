// # appendFile
// In this activity, you will create a "commit logger" that records commit messages (for poetic purposes) using `fs`.
// ## Instructions
// * In your working directory, create a Node application, `index.js`, that accepts a command line argument, and, each time it is run, will write the argument to file _without_ overwriting the existing text.
// * You may need to consult the Node.js `fs` documentation for the appropriate method and its usage.
// ## Hint(s)
// * If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?
// ## Bonus
// * How would you add arguments on new lines? 

// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
for (var i = 2; i < process.argv.length; i++) {
//  process.argv.forEach(function(item){
    fs.appendFile("log.txt",  item + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// fs.readFile("log.txt", "utf8", function (error, data) {
//     if (error) {
//         return console.log(error);
//     }
//     for (var i = 2; i < process.argv.length; i++) {
//         data += "\n" + process.argv[i];
//     }

//     console.log(data);
//     fs.writeFile("log.txt", data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Success!");
//     });
// });