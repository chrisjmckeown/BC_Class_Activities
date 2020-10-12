// # Parameter Check
// In this activity, you will write a Node.js command line application that accepts two arguments and returns true if the two values are equal and false if they are not.
// ## Instructions
// * Create a file, `index.js`, in your working directory.
// * Write a script using `process.argv` to accept two command line arguments and compare their values.


// ## Hint(s)
// * Start by simply logging the value of each argument to console.
// * There's more than one way to solve this problem!
// ## Bonus

// * How many ways can you solve this problem?

//console.log(process.argv)
var input1 = process.argv[2];
var input2 = process.argv[3];

// if(process.argv[2] === process.argv[3]){
//     console.log('true')
// }
// else{
//     console.log('false')
// }

// console.log(input1 === input2);


console.log(input1 === input2 ? "true" : "false")