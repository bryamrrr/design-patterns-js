class Car {
  constructor() {
    this.name = null;
    this.maxSpeed = null;
  }

  getString() {
    return `Name is ${this.name} and maxSpeed is ${this.maxSpeed}`;
  }
}

class SportCar extends Car {
  constructor() {
    super();
    this.name = 'Sport';
    this.maxSpeed = '250 km/h';
  }
}

class FamilyCar extends Car {
  constructor() {
    super();
    this.name = 'Family';
    this.maxSpeed = '160 km/h';
  }
}

class MyFactory {
  createCar(cartType) {
    this.car = null;
    if (cartType === 'Sport') {
      this.car = new SportCar();
    } else if (cartType === 'Family') {
      this.car = new FamilyCar();
    } else {
      console.log(`Car type ${cartType} is not defined`);
    }

    return this.car;
  }

  showCar() {
    console.log(this.car);
  }
}

myFactory = new MyFactory();
s = myFactory.createCar('Sport');
f = myFactory.createCar('Family');

console.log(s);
console.log(f);