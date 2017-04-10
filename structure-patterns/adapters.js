class AdapteeShipping {
  request(src, trg, weight) {
    this.src = src;
    this.trg = trg;
    this.weight = weight;
    this.total = this.weight * 100;
    return this.total;
  }
}

class TargetShipping {
  login(credentials) {
    // TODO
  }

  setSource(src) {
    this.src = src;
  }

  setTarget(trg) {
    this.trg = trg;
  }

  calculate(weight) {
    this.weight = weight;
    this.total = this.weight * 100;
    return this.total;
  }
}

class ShippingAdapter {
  constructor(credentials) {
    this.targetShipping = new TargetShipping();
    this.targetShipping.login(credentials);
  }

  request(src, trg, weight) {
    this.targetShipping.setSource(src);
    this.targetShipping.setTarget(trg);

    return this.targetShipping.calculate(weight);
  }
}

class Client {
  run() {
    var oldInterface = new AdapteeShipping();
    var cost = oldInterface.request('1234', '4321', 123.45);
    console.log(cost);

    var mycreds = 'user/pass';
    var adapter = new ShippingAdapter(mycreds);
    var newCost = adapter.request('1234', '4321', 123.45);
    console.log(newCost);
  }
}

client = new Client();
client.run();