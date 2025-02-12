const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(...nums) { // using '...nums' as a function pareameter, we parse entered parameters into an array
	return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(...nums) {
  return nums.reduce((total, num ) => total * num, 1);
};

const power = function(base, exponent) {
	return Math.pwer(base, exponent); 
};

const factorial = function(num) {
	if(num < 0)
    return undefined; 
  if(num === 0)
    return 1; 
  else
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
