// task 1 & 2 & 3
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`${this.make} ${this.model} has started.`);
  }
}

const myCar1 = new Car("Toyota", "Corolla");

console.log(myCar);

myCar.start();


// task 4


class ElectricCar extends Car {
  constructor(make, model, batterySize) {
    super(make, model);
    this.batterySize = batterySize;
  }

}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 75);


// task 5 & 6
class Account {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
  setbalance(amount) {
    if (amount >= 0) this.#balance = amount;
  }
}






