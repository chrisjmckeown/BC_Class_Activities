class Character {
  constructor(name, strength, hitPoints) {
    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!strength) {
      throw new Error("You are missing the strength.");
    }
    if (!hitPoints) {
      throw new Error("You are missing the hit points.");
    }
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitPoints <= 0){
      console.log("dead");
      return false;
    }
    else{
      console.log("alive");
      return true;
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    console.log(`${opponent.name} attacked and lost ${this.strength}`);
    opponent.hitPoints -= this.strength;
  }
}

// Create two unique characters using the "character" class
const lottie = new Character("Lottie",2,10);
const arthur = new Character("Arthur",2,10);

// Create an interval that alternates attacks every 2000 milliseconds
let attacker = lottie.name;
lottie.printStats();
arthur.printStats();

const turnInterval = setInterval(function(){ 
  
  if (!lottie.isAlive() || !arthur.isAlive()) {
    clearInterval(turnInterval);
    console.log("Game over!");
  } else if (attacker === "Lottie") {
    attacker = arthur.name;
    lottie.attack(arthur);
    arthur.printStats();
  } else {
    arthur.attack(lottie);
    lottie.printStats();
  }
}, 2000);