function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}
DigitalPal.prototype.feed = function () {
    if (this.hungry) {
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;
    }
    else {
        console.log("No thanks! I'm full.");
    }
}
DigitalPal.prototype.sleep = function () {
    if (this.sleepy) {
        console.log("Zzzzzzzz");
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
    }
    else {
        console.log("No way! I'm not tired.");
    }
}
DigitalPal.prototype.play = function () {
    if (this.play) {
        console.log("Yay! Let's play!");
        this.bored = false;
        this.hungry = true;
    }
    else {
        console.log("Not right now. Later?");
    }
}
DigitalPal.prototype.increaseAge = function () {
    this.age += 1;
    console.log("Happy Birthday to me! I am " + this.age + " old!");
}
DigitalPal.prototype.bark = function () {
    console.log("Woof! Woof!");
}
DigitalPal.prototype.goOutside = function () {
    if (this.outside) {
        console.log("We're already outside though...");
    }
    else {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
}
DigitalPal.prototype.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else {
        console.log("I'm already inside...");
    }
}
DigitalPal.prototype.meow = function () {
    console.log("Meow! Meow!");
}
DigitalPal.prototype.destroyFurniture = function () {
    if (this.houseCondition !== 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
    // Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.
}
DigitalPal.prototype.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that? " + this.houseCondition);
}

// Create a new animals object to contain our new Digital Pals
//const animals = {};

// creates a new DigitalPal object with the name "dog"
//animals.dog = new DigitalPal();

// creates a new DigitalPal object with the name "cat"
//animals.cat = new DigitalPal();

const cat = new DigitalPal();
cat.feed();

// Grabbing command line arguments for animal and method
//const animal = process.argv[2];
const method = process.argv[2];
cat[method]();


// try calling your chosen animal and method from the terminal example: 'node index cat meow'
//animals[animal][method]();