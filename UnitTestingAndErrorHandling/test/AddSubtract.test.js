let createCalculator = require('../AddSubtract');
let { assert, expect, should } = require('chai');

//Return a module (object), containing the functions add(), subtract() and get() as properties
//Keep an internal sum which can’t be modified from the outside
//The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
//The function get() returns the value of the internal sum

describe('Testing createCalculator problem functionality', () => {
    it('Return object, containing subtract proprety', () => {
        let calculate = createCalculator();
        expect(calculate.hasOwnProperty('add')).to.equal(true);
    });
    it('Return object, containing subtract proprety', () => {
        let calculate = createCalculator();
        expect(calculate.hasOwnProperty('subtract')).to.equal(true);
    });
    it('Return object, containing get proprety', () => {
        let calculate = createCalculator();
        expect(calculate.hasOwnProperty('get')).to.equal(true);
    });
    it('Add to internal sum', () => {
        let calculate = createCalculator();
        calculate.add(5);
        assert.equal(calculate.get(), 5);
    });
    it('Subtract to internal sum', () => {
        let calculate = createCalculator();
        calculate.subtract(2);
        assert.equal(calculate.get(), -2);
    });
    it('Get internal sum', () => {
        let calculate = createCalculator();
        assert.equal(calculate.get(), 0);
    });
    it('Undefined when try to pass string as parameter of add', () => {
        let calculate = createCalculator();
        assert.equal(calculate.add('pesho'), undefined);
    });
    it('Undefined when try to pass string as parameter of subtract', () => {
        let calculate = createCalculator();
        assert.equal(calculate.subtract('pesho'), undefined);
    });
    it('Add when try to pass number as string parameter of add', () => {
        let calculate = createCalculator();
        calculate.add('3');
        assert.equal(calculate.get(), 3);
    });
    it('Subtract when try to pass number as string as parameter of subtract', () => {
        let calculate = createCalculator();
        calculate.add('3');
        calculate.subtract('2')
        assert.equal(calculate.get(), );
    });
});