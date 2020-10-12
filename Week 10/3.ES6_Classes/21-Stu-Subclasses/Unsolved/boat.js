const Vehicle = require("./vehicle");

class Boat extends Vehicle {
  constructor(id, numberOfWheels, sound, crew) {
    super(id, numberOfWheels, sound) ;
    this.crew = crew;
  }
  crewSoundOff(){
    this.crew.forEach(crewMember =>{
        console.log(crewMember.name);
    });
  };

  useHorn(){
    console.log(this.sound);
  };
}

const boat = new Boat(12, 0, "Toot", [{name:"Frank"}, {name:"Tom"}]);
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();