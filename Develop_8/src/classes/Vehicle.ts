import Driveable from '../interfaces/Driveable.js';
import Wheel from './Wheel.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Vehicle class
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
    this.started = false;
    this.currentSpeed = 0;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels: ${this.wheels.length}`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log(`${this.make} ${this.model} has started.`);
  }

  // Method to accelerate the vehicle
  accelerate(speed: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += speed;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
      console.log(`${this.make} ${this.model} has accelerated by ${speed} MPH.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to decelerate the vehicle
  decelerate(speed: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= speed;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
      console.log(`${this.make} ${this.model} has decelerated by ${speed} MPH.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
      console.log(`${this.make} ${this.model} has turned ${direction}.`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log('Vehicle reversed');
      console.log(`${this.make} ${this.model} is reversing.`);
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// Export the Vehicle class
export default Vehicle;
