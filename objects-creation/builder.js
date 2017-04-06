function testBuilderPattern() {
  var director = new Director();
  var carBuilder = new CarBuilder();
  var car = director.construct(carBuilder);

  car.showDoors();
}

class Director {
  construct(builder) {
    builder.step1();
    builder.step2();
    return builder.getResult();
  }
}

class CarBuilder {
  constructor() {
    this.car = null;
  }

  step1() {
    this.car = new Car();
  }

  step2() {
    this.car.addParts();
  }

  getResult() {
    return this.car;
  }
}

class Car {
  constructor() {
    this.doors = 0;
  }

  addParts() {
    this.doors = 4;
  }

  showDoors() {
    console.log(`I have ${this.doors} doors`);
  }
}

testBuilderPattern();