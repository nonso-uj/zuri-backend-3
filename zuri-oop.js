// Main class
class Car {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
      this.distanceCovered = 0;
    }
  
    drive() {
      this.distanceCovered += this.speed;
    }
  
    getDetails() {
      return `${this.name} (Speed: ${this.speed} km/h, Distance: ${this.distanceCovered} km)`;
    }
  }
  
  // Subclass
  class SportsCar extends Car {
    constructor(name, speed, turboBoost) {
      super(name, speed);
      this.turboBoost = turboBoost;
    }
  
    drive() {
      this.distanceCovered += this.speed + this.turboBoost;
    }
  }
  
  // Subclass
  class Truck extends Car {
    constructor(name, speed, cargoWeight) {
      super(name, speed);
      this.cargoWeight = cargoWeight;
    }
  
    drive() {
      const speedReduction = Math.min(20, this.cargoWeight / 100);
      this.distanceCovered += this.speed - speedReduction;
    }
  }
  
  // Subclass
  class ElectricCar extends Car {
    constructor(name, speed, batteryCapacity) {
      super(name, speed);
      this.batteryCapacity = batteryCapacity;
    }
  
    drive() {
      const batteryUsage = 1;
      if (this.batteryCapacity > 0) {
        this.distanceCovered += this.speed;
        this.batteryCapacity -= batteryUsage;
      } else {
        this.distanceCovered += 0;
      }
    }
  }
  
  // Race simulation
  class Race {
    constructor(duration) {
      this.duration = duration;
      this.cars = [];
    }
  
    addCar(car) {
      this.cars.push(car);
    }
  
    start() {
      console.log("Race started!");
      for (let time = 1; time <= this.duration; time++) {
        console.log(`\n--- Time Unit: ${time} ---`);
        this.cars.forEach(car => {
          car.drive();
          console.log(car.getDetails());
        });
      }
    }
  
    displayResults() {
      console.log("\nRace Results:");
      this.cars.sort((a, b) => b.distanceCovered - a.distanceCovered);
      this.cars.forEach((car, index) => {
        console.log(`${index + 1}. ${car.name} - Distance: ${car.distanceCovered} km`);
      });
    }
  }
  
  const race = new Race(5);
  
  race.addCar(new SportsCar("Ferrari", 200, 50));
  race.addCar(new Truck("Volvo Truck", 80, 500));
  race.addCar(new ElectricCar("Tesla", 150, 400));
  race.addCar(new Car("Toyota Corolla", 120));
  
  // Start the race
  race.start();
  
  // Show results
  race.displayResults();
  