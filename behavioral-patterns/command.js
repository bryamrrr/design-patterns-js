class Command {
  execute() {
    throw 'You have to implement this method';
  }
}

class Light { // Receiver class
  turnOn() {
    console.log('Light on');
  }

  turnOff() {
    console.log('Light off');
  }
}

class Switch { // Invoker class
  constructor(onCommand, offCommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  on() {
    this.onCommand.execute();
  }

  off() {
    this.offCommand.execute();
  }
}

class OnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class OffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class LightSwitch { // Client class
  constructor() {
    this.light = new Light();
    this.switchUp = new OnCommand(this.light);
    this.switchDown = new OffCommand(this.light);
    this.switch = new Switch(this.switchUp, this.switchDown);
  }

  operation(cmd) {
    if (cmd === 'ON') {
      this.switch.on();
    } else if (cmd === 'OFF') {
      this.switch.off();
    } else {
      console.log('Invalid operation');
    }
  }
}

client = new LightSwitch();
console.log('Testing ON command');
client.operation('ON');
console.log('Testing OFF command');
client.operation('OFF');