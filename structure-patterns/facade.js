class Scanner {
  constructor() {
    this.name = 'Scanner';
  }
}

class Parser {
  constructor() {
    this.name = 'Parser';
  }
}

class Compiler {
  constructor() {
    this.name = 'Compiler';
    this.scanner = new Scanner();
    this.parser = new Parser();
  }

  compile() {
    console.log('Compiling');
    console.log(`Scanning ${this.scanner.name}`);
    console.log(`Parsing ${this.parser.name}`);
  }
}

compiler = new Compiler();
compiler.compile();