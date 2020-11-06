const { get } = require("lodash");

class Person{
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;

       // this.getName = this.getName.bind(this);
    }

    getName(){
        return this;
    }
}

const sam = new Person("Sam", 29, "Artist");
console.log(sam.getName())
//const getNameFunc = sam.getName;
const getNameFunc = sam.getName.bind(sam);

console.log(getNameFunc());

// const person1 = {
//     name: "Steve",
//     age: 52,
//     occupation: "Developer"
// }
// const person2 = {
//     name: "Lily",
//     age: 32,
//     occupation: "Designer"
// }
// const person3 = {
//     name: "Sam",
//     age: 20,
//     occupation: "Artist"
// }

// console.log('Hello, my name is ' + person1.name + '.');

// function printGreeting(eyecolour){
//     return ('Hello, my name is ' + this.name + '. I have ' + eyecolour + ' eyes');
// }

// // person2.printGreeting = printGreeting;
// // console.log(person2.printGreeting());

// // console.log(printGreeting.call(person2, 1,2,3,4,5,6,7)); //composition
// // console.log(printGreeting.apply(person2, ["brown"]));

// const greatFunction = printGreeting.bind(person3);

// console.log(greatFunction("blue"))