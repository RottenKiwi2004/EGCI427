class MyMath {
	constructor() {
			this.add        = (a, b) => a + b;
			this.minus      = (a, b) => a - b;
			this.multiply   = (a, b) => a * b;
			this.divide     = (a, b) => a / b;
	}
}

var result = new MyMath();

console.log(result.add(2, 3));
console.log(result.minus(2, 3));
console.log(result.multiply(2, 3));
console.log(result.divide(2, 0));