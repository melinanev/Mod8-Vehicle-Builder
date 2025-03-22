// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Ensure the motorbike has exactly 2 wheels
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  performWheelie(): void {
    console.log(`${this.make} ${this.model} is performing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Wheel 1: ${this.wheels[0].getDiameter()} inch with a ${this.wheels[0].getTireBrand()} tire`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter()} inch with a ${this.wheels[1].getTireBrand()} tire`);
    console.log(`This motorbike has ${this.wheels.length} wheels.`);
  }

  override start(): void {
    console.log(`Motorbike ${this.make} ${this.model} has started.`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
