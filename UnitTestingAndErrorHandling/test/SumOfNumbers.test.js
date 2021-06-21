let sum = require('../SumOfNumbers.js');
let { assert, expect, should } = require('chai');

describe('Testing SumOfNuumbers functionality', () => {
    it('Take an array of numbers as argument', () => {
        let expected = 'TypeError';
        let result = '';
        try {
            sum(1);
        } catch (error) {
            result = error.name;
        }
        assert.equal(result, expected);
    });
    it('Return the sum of the values of all elements inside the array', () => {
        let expected = 6;
        assert.equal(sum([1, 2, 3]), expected);
    });
    it('Return the sum of the values of element inside the array of one element', () => {
        let expected = 1;
        assert.equal(sum([1]), expected);
    });
});