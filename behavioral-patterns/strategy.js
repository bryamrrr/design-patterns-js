class TextFinder {
  find() {
    throw 'You have to implement this method';
  }
}

class FirstFinder extends TextFinder {
  find(text) {
    return `${text} was found :)`;
  }
}

class SecondFinder extends TextFinder {
  find(text) {
    return `${text} was found ^^`;
  }
}

finderOne = new FirstFinder();
finderTwo = new SecondFinder();

console.log(finderOne.find('abc'));
console.log(finderTwo.find('abc'));