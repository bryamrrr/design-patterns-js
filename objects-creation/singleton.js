class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this.init();
    }
    return Singleton.instance;
  }

  init() {
    function privateMethod() {
      console.log( 'I am private' );
    }

    let privateRandomNumber = Math.round(Math.random()*1000);

    return {
      publicMethod: function () {
        privateMethod();
        console.log( 'The public can see me!' );
      },
      publicProperty: 'I am also public',
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    }
  }
}

var singleA = new Singleton();
var singleB = new Singleton();

console.log(`singleA random has a value of ${singleA.getRandomNumber()}`);
console.log(`singleB random has a value of ${singleB.getRandomNumber()}`);
console.log('same? ' + (singleA.getRandomNumber() === singleB.getRandomNumber()) );