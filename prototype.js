const Car = function (make) {
	this.make = make;
	function test(a) {
		return a;
	}

	this.test2 = function (a) {
		return a;
	}
}

class Test { 
	constructor(val) { 
		this.val = val 
	} 
	methodTest() { 
		console.log('I think this worked') 
	} 
}

const mustang = new Car('mustang');
console.log(mustang);
// console.log(mustang.test('asdf')) //this returns a TypeError
console.log(mustang.test2('asdf'))

/////////YouTube Video

function Particle() {
	this.x = 100;
	this.y = 99;
}

Particle.prototype.show = function () {
	return `${this.x}, ${this.y}`
}

const p = new Particle();

Array.prototype.hi = function () {
	console.log('hi');
}

const test = [1, 2, 4];
test.hi()

const NewParticle = function () {
	Particle.call(this);
	this.new = 'new'
}

NewParticle.prototype = Object.create(Particle.prototype);
NewParticle.prototype.constructor = NewParticle;

const newtest = new NewParticle();
console.log(newtest);
newtest.show();

class Store {
  constructor() {
    this.books = [];
  }

  addBook(bookName) {
    this.books.push(bookName);
  }
}

const store = new Store();

console.log(store.__proto__.hasOwnProperty('books'));

Store.prototype.logBook = function(log) { console.log('logging', log) };

store.logBook('hi')

const testObj = { test: 'hi' };

console.log(testObj.hasOwnProperty('test'));

Array.prototype.sayHello = function() { console.log('hello') };
store.books.sayHello()

console.log(store.__proto__.__proto__.hasOwnProperty('books'))

class Store {
  constructor() {
    this.books = [];
  }

  addBook(bookName) {
    this.books.push(bookName);
  }
}

const store = new Store();

console.log(store.__proto__.hasOwnProperty('books'));

Store.prototype.logBook = function(log) { console.log('logging', log) };

store.logBook('hi')

Array.prototype.sayHello = function() { console.log('hello') };
store.books.sayHello()

console.log([].hasOwnProperty('hi'))
