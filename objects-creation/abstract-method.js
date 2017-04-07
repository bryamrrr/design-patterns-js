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

class AbstractFactory {
  constructor() {
    this.manufacturer = null;
  }

  getString() {
    return `Manufacturer is ${this.manufacturer}`;
  }

  createCar(carType) {
    throw 'You have to implement this method';
  }

  static getFactory(factoryName) {
    if (factoryName === 'VW') {
      return new VWFactory();
    } else if (factoryName === 'BMW') {
      return new BMWFactory();
    } else {
      console.log('Unknow factory');
    }
  }
}

class VWFactory extends AbstractFactory {
  constructor() {
    super();
    this.manufacturer = 'VW';
  }

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

myFactory = AbstractFactory.getFactory('VW');
console.log(myFactory);

s = myFactory.createCar('Sport');
f = myFactory.createCar('Family');

console.log(s);
console.log(f);