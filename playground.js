class Car {
  constructor(cost) {
    this.cost = cost;
  }

  drive() {
    console.log('I drive');
  }
}

class Mustang extends Car {
  constructor(cost, name) {
    super(cost);
    this.name = name;
    this.cost = cost;
  }
}

const mustang = new Mustang(123, 'nicks car');
console.log(mustang); // { cost: 123, name: 'nicks car' }

Car.prototype.stop = function() { console.log('stopp!!!')}

mustang.stop();
console.log(mustang.__proto__ === Mustang.prototype)