class Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  started: boolean;
  currentSpeed: number;

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
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.started = false;
    this.currentSpeed = 0;
  }

  printDetails(): void {
    console.log(`Vehicle Details: ${this.make} ${this.model}`);
  }

  start(): void {
    this.started = true;
    console.log(`Vehicle ${this.make} ${this.model} has started.`);
  }

  accelerate(speed: number): void {
    if (this.started) {
      this.currentSpeed += speed;
      console.log(`Vehicle ${this.make} ${this.model} accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  decelerate(speed: number): void {
    if (this.started) {
      this.currentSpeed -= speed;
      console.log(`Vehicle ${this.make} ${this.model} decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(`Vehicle ${this.make} ${this.model} has stopped.`);
  }

  turn(direction: string): void {
    if (this.started) {
      console.log(`Vehicle ${this.make} ${this.model} turned ${direction}.`);
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  override vin!: string;
  override color!: string;
  override make!: string;
  override model!: string;
  override year!: number;
  override weight!: number;
  override topSpeed!: number;
  override wheels!: Wheel[];
  towingCapacity!: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor(
    vin: string, 
    color: string, 
    make: string, 
    model: string, 
    year: number, 
    weight: number, 
    topSpeed: number, 
    wheels: Wheel[], 
    towingCapacity: number) 


  { 
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Override the start method from the Vehicle class
  override start(): void {
    console.log(`Truck ${this.make} ${this.model} has started.`);
    super.start();
  }

  // Override the accelerate method from the Vehicle class
  override accelerate(speed: number): void {
    if (this.started) {
      this.currentSpeed += speed;
      console.log(`Truck ${this.make} ${this.model} accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the truck first');
    }
  }

  // Override the decelerate method from the Vehicle class
  override decelerate(speed: number): void {
    if (this.started) {
      this.currentSpeed -= speed;
      console.log(`Truck ${this.make} ${this.model} decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the truck first');
    }
  }

  // Override the stop method from the Vehicle class
  override stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(`Truck ${this.make} ${this.model} has stopped.`);
  }

  // Override the turn method from the Vehicle class
  override turn(direction: string): void {
    if (this.started) {
      console.log(`Truck ${this.make} ${this.model} turned ${direction}.`);
    } else {
      console.log('Start the truck first');
    }
  }

  // Implement the reverse method
  reverse(): void {
    if (this.started) {
      console.log(`Truck ${this.make} ${this.model} is reversing.`);
    } else {
      console.log('Start the truck first');
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Vehicle): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
    console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
  }
}

// Export the Truck class as the default export
export default Truck;
