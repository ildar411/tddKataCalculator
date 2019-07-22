const bracketsBalance = require('./bracketsBalance');
const add = require('./simpleOperation');

function Calculator(string) {
	var balance = bracketsBalance(string);
	if(balance) return add(string)
	else return 'error';
}
module.exports = Calculator;