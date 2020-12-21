class Particle {
	constructor(x, y, square) {
		this.x = x;
		this.y = y;
	}

	update() {
		this.x += 5;
	}
}

class Confetti extends Particle {
	constructor(x, y) {
		super(x, y);
	}

	bright() {
		return this.y;
	}

	update() {
		return this.x + this.y;
	}
}

const conf = new Confetti(2, 4);
console.log(conf);
console.log(conf.update())