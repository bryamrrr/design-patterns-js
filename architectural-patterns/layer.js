class PresentationalLayer {
  constructor() {
    this.name = 'PresentationalLayer';
  }

  setLowerLayer(lowerLayer) {
    this.lowerLayer = lowerLayer;
  }

  layer3(param) {
    console.log(`We are in ${this.name}`);
    this.lowerLayer.layer2(param);
    console.log(`Closing layer ${this.name}`);
  }
}

class LogicLayer {
  constructor() {
    this.name = 'LogicLayer';
  }

  setLowerLayer(lowerLayer) {
    this.lowerLayer = lowerLayer;
  }

  layer2(param) {
    console.log(`We are in layer ${this.name}`);
    this.lowerLayer.layer1(param);
    console.log(`Closing layer ${this.name}`);
  }
}

class DataLayer {
  constructor() {
    this.name = 'DataLayer';
  }

  setLowerLayer(lowerLayer) {
    this.lowerLayer = lowerLayer;
  }

  layer1(param) {
    console.log(`We are in layer ${this.name} and param is ${param}`);
    console.log(`Closing layer ${this.name}`);
  }
}

var ui = new PresentationalLayer();
var logic = new LogicLayer();
var data = new DataLayer();

ui.setLowerLayer(logic);
logic.setLowerLayer(data);

ui.layer3('Example Param');