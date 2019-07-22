const chai = require('chai');
const bracketsBalance = require('../lib/bracketsBalance');
const add = require('../lib/simpleOperation');
const calc = require("../lib/calc");

const expect = chai.expect;

describe('bracketsBalance', () => {
	it('should return true when there is nothing', () => {
		var result = bracketsBalance("");
		expect(result).to.equal(true);
	});
	it('should return false when there is only (', () => {
		var result = bracketsBalance('(');
		expect(result).to.equal(false);
	});
	it('should return false when there is only )', () => {
		var result = bracketsBalance(')');
		expect(result).to.equal(false);
	});
	it('should return true when balance of brackets is right', () => {
		var result = bracketsBalance('((1 + 2) + ((1+2)+3+4))');
		expect(result).to.equal(true);
	});
	it('should return false when balance of brackets is wrong', () => {
		var result = bracketsBalance('(1+2)+((1+2+3+4');
		expect(result).to.equal(false);
	});
})

describe("add", function () {
  it("should return zero when there is nothing to add", function () {
		
		var result = add('');
    expect(result).to.equal('0');
  });
  
  it("should return the parameter when there is only one (5)", function () {
		
		var result = add("5");
    expect(result).to.equal('5');
  });

  it("should return the sum of two parameters", function () {
    var result = add("7 + 5");
    expect(result).to.equal('12');
  });

  it("should return the sum of five parameters", function () {
    var result = add("1 + 2 + 3 + 4 + 5");
		expect(result).to.equal('15');
		
	});
	it('should return the ansver', function(){
		var result = add('((0+2*8)*(1+3)+1)/0')
		expect(result).to.equal('error')
	})
	it('should return the ansver', function(){
		var result = add('((0+2*8)*(1+3)+1)')
		expect(result).to.equal('65')
	})
});

describe("calc", function () {
	it('should return the ansver', function(){
		var result = calc('((0+2*8)*(1+3)+1)')
		expect(result).to.equal('65')
	})
	it('should return the answer', function(){
		var result = calc('(1.5*2+3)*3');
		expect(result).to.equal('18');
	})
	it('should return the error', function(){
		var result = calc('((0+2*8)*(1+3)+1)/0')
		expect(result).to.equal('error')
	})
	it('should return the balance error', function(){
		var result = calc('((0+2*8)*(1+3)+1')
		expect(result).to.equal('error')
	})
});


