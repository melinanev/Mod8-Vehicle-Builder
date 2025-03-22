// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle {
  // No need to redeclare properties as they are inherited from Vehicle

  // Constructor for the Car class
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
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed, wheels);

    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Override the start method from the Vehicle class
  override start(): void {
    this.started = true;
    console.log(`Car ${this.make} ${this.model} has started.`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter()} inch with a ${this.wheels[0].getTireBrand()} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter()} inch with a ${this.wheels[1].getTireBrand()} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter()} inch with a ${this.wheels[2].getTireBrand()} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter()} inch with a ${this.wheels[3].getTireBrand()} tire`
    );
  }

  // Methods specific to Car
  override reverse(): void {
    if (this.started) {
      console.log(`Car ${this.make} ${this.model} is reversing.`);
    } else {
      console.log('Start the car first');
    }
  }
}

// Export the Car class as the default export
export default Car;
