// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers: { selectedVehicleVin: string }) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers: { vehicleType: string }) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar(); 
        } else if (answers.vehicleType === 'Truck') {
          // create a truck
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          // create a motorbike
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    interface CarAnswers {
      color: string;
      make: string;
      model: string;
      year: number;
      weight: number;
      topSpeed: number;
      wheel1Diameter: number;
      wheel1Brand: string;
      wheel2Diameter: number;
      wheel2Brand: string;
      wheel3Diameter: number;
      wheel3Brand: string;
      wheel4Diameter: number;
      wheel4Brand: string;
    }

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'wheel1Diameter',
          message: 'Enter Diameter for Wheel 1',
        },
        {
          type: 'input',
          name: 'wheel1Brand',
          message: 'Enter Brand for Wheel 1',
        },
        {
          type: 'input',
          name: 'wheel2Diameter',
          message: 'Enter Diameter for Wheel 2',
        },
        {
          type: 'input',
          name: 'wheel2Brand',
          message: 'Enter Brand for Wheel 2',
        },
        {
          type: 'input',
          name: 'wheel3Diameter',
          message: 'Enter Diameter for Wheel 3',
        },
        {
          type: 'input',
          name: 'wheel3Brand',
          message: 'Enter Brand for Wheel 3',
        },
        {
          type: 'input',
          name: 'wheel4Diameter',
          message: 'Enter Diameter for Wheel 4',
        },
        {
          type: 'input',
          name: 'wheel4Brand',
          message: 'Enter Brand for Wheel 4',
        },
      ])
      .then((answers: CarAnswers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          answers.year,
          answers.weight,
          answers.topSpeed,
          [
            new Wheel(answers.wheel1Diameter, answers.wheel1Brand),
            new Wheel(answers.wheel2Diameter, answers.wheel2Brand),
            new Wheel(answers.wheel3Diameter, answers.wheel3Brand),
            new Wheel(answers.wheel4Diameter, answers.wheel4Brand),
          ]
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    interface TruckAnswers {
      color: string;
      make: string;
      model: string;
      year: number;
      weight: number;
      topSpeed: number;
      towingCapacity: number;
    }

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers: TruckAnswers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          answers.year,
          answers.weight,
          answers.topSpeed,
          [new Wheel(), new Wheel(), new Wheel(), new Wheel()],
          answers.towingCapacity, 
          
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    interface MotorbikeAnswers {
      color: string;
      make: string;
      model: string;
      year: number;
      weight: number;
      topSpeed: number;
      frontWheelDiameter: number;
      frontWheelBrand: string;
      rearWheelDiameter: number;
      rearWheelBrand: string;
    }

    inquirer
      .prompt([
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: MotorbikeAnswers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          answers.year,
          answers.weight,
          answers.topSpeed,
          [
          new Wheel((answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel((answers.rearWheelDiameter), answers.rearWheelBrand)
          ]
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  findVehicleToTow(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers: { vehicleToTow: any }) => {
        if (answers.vehicleToTow instanceof Truck) {
          console.log('The truck cannot tow itself.');
        } else {
          answers.vehicleToTow.tow(answers.vehicleToTow);
          this.performActions();
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          default: 'Print details',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow a vehicle',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers: { action: string }) => {
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has started.`);
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has accelerated by 5 MPH.`);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has decelerated by 5 MPH.`);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has stopped.`);
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has turned right.`);
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} has turned left.`);
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
              console.log(`${this.vehicles[i].make} ${this.vehicles[i].model} is reversing.`);
            }
          }
        } else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else if (answers.action === 'Tow a vehicle') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Truck) {
              this.findVehicleToTow();
              return; // Exit to avoid calling performActions again immediately
            }
          }
        } else if (answers.action === 'Wheelie') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Motorbike) {
              // Type assertion to tell TypeScript this is a Motorbike
              (this.vehicles[i] as Motorbike).performWheelie();
            }
          }
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: { CreateOrSelect: string }) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
