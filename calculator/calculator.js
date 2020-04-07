function add (x,y) {
	return x+y;
	
}

function subtract (x,y) {
	return x-y;
	
}

function sum (array) {
	let sum = 0;
	for(let i=0;i<array.length;i++){
		sum+=array[i];
	}
	return sum;
}

function multiply (array) {
	let product=1;
	for(let i=0;i<array.length;i++){
		product *= array[i];
	}
	return product;
}

function power(base,power) {
	return base ** power;
}

function factorial(n) {
	if(n==0 || n==1) return 1;
	return n*factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
