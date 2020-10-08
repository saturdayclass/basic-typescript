/*
Abstract Class
sebuah class yang tidak bisa di instansiasi langsung dari luar class itu sendiri, melainkan harus meng extends sebuah class child nya.
*/

abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log('Brummmmm....');
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class MotorCycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motorCycle = new MotorCycle();
console.log(motorCycle.wheels);
motorCycle.start();
