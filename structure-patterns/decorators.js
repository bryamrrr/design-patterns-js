class Shape {
  draw() {
    throw 'You have to implement this method';
  }
}

class Circle extends Shape {
  draw() {
    console.log('Im a circle');
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Im a rectangle');
  }
}

class ShapeDecorator extends Shape {
  constructor(decoratedShape) {
    super();
    this.decoratedShape = decoratedShape;
  }

  draw() {
    this.decoratedShape.draw();
  }

  doSomethingElse() {

  }
}

class ColorRedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape) {
    super();
    this.decoratedShape = decoratedShape;
  }

  draw() {
    this.decoratedShape.draw();
    this.doSomethingElse();
  }

  doSomethingElse() {
    console.log('Coloring red');
  }
}

circle = new Circle();
redCircle = new ColorRedShapeDecorator( new Circle() );

circle.draw();
redCircle.draw();