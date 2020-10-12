const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, numberOfWheels, sound, colour,passengers) {
    super(id, numberOfWheels, sound) ;
    this.colour = colour;
    this.passengers = passengers;
  }
  checkPassengers(){
    if(this.passengers.length > 4){
        console.log(`Too many passengers!!! ${this.passengers.length}`);
    }
    else{
        console.log(`All good ${this.passengers.length}`);
    }
  };

  useHorn(){
    console.log(this.sound);
  };
}
const passengers = [{name:"Frank"}, {name:"Tom"}];
const car = new Car(12, 4, "Honk", "red", passengers);
car.printInfo();
car.useHorn();
car.checkPassengers();