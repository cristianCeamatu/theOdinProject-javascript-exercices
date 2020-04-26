function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((current, next) => current + next, 0);
}

function multiply (array) {
	return array.reduce((current, next) => current * next, 1);
}

function power(a, b) {
	return a**b;
}

function factorial(number) {
	if (number === '0') return 1;

	let result = 1;
	let i = 1;
	while (i <= number) {
		result *= i;
		i++;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}