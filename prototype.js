const car = function (make) {
	this.make = make;
	function test(a) {
		return a;
	}

	this.test2 = function (a) {
		return a;
	}
}

const mustang = new car('mustang');
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
