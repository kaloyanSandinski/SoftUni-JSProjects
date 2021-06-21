const subSum = require('../SubSum.js');
const { assert, expect, should } = require('chai');
const { it } = require('mocha');

describe('Test for SubSum problem', () => {
    it('If the first element is not an array, return NaN', () => {
        let expect = NaN;
        let actualResult = subSum([10, 'twenty', 30, 40], 0, 2);
        assert.deepStrictEqual(actualResult, expect);
    })
    it('If the start index is less than zero, consider its value to be a zero', () => {
        let expect = 3.3;
        let actualResult = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
        assert.equal(actualResult, expect);
    })
    it('If the end index is outside the bounds of the array, assume it points to the last index of the array', () => {
        let expect = 150;
        let actualResult = subSum([10, 20, 30, 40, 50, 60], 3, 300);
        assert.equal(actualResult, expect);
    })
});