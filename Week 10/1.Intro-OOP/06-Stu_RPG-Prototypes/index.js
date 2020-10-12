function Character(name, profession, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = () => {
        console.log(`Name: ${this.name} 
Profession: ${this.profession}
Age: ${this.age}
Strength: ${this.strength}
Hit Points: ${this.hitPoints}`);
    }
}
Character.prototype.IsAlive = function () {
    const alive = this.hitPoints > 0 ? true : false;
    if (alive) {
        console.log(`${this.name}, you're alive with ${this.hitPoints} hit points left.`);
    }
    else {
        console.log(`${this.name}, you're dead.`);
    }
};
Character.prototype.Attack = function (attacker) {
    attacker.hitPoints -= this.strength;
};
Character.prototype.LevelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitPoints += 25;
};

const bob = new Character("Bob", "Builder", 42, 2, 10);
const anne = new Character("Anne", "Engineer", 23, 3, 15);

bob.printStats();
anne.printStats();

bob.Attack(anne);
bob.printStats();
bob.IsAlive();

anne.LevelUp();
anne.printStats();