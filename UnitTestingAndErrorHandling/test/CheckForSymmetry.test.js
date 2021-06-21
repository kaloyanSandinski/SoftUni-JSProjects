//Take an array as argument
//Return false for any input that isn’t of the correct type
//Return true if the input array is symmetric
//Otherwise, return false

let isSymmetric = require('../CheckForSymmetry');
let { assert, expect, should } = require('chai');

describe('Testing CheckForSymmetry functionality', () => {
    it('Return false for any input that isn’t of the correct type', () => {
        let expected = false;
        assert.equal(isSymmetric(1), expected);
        assert.equal(isSymmetric('hello'), expected);
    });
    it('Return true if the input array is symmetric', () => {
        let expected = true;
        assert.equal(isSymmetric([1, 2, 3, 3, 2, 1]), expected);
    });
    it('Return false if the input array is not symmetric', () => {
        let expected = false;
        assert.equal(isSymmetric([1, 2, 3]), expected);
    });
    it('Return true if the input array is symmetric', () => {
        let expected = true;
        assert.equal(isSymmetric([1]), expected);
        assert.equal(isSymmetric(['a', 'a']), expected);
    })
    it('Return false for any input that isn’t of the correct type', () => {
        let expected = false;
        assert.equal(isSymmetric([1, 'hello', 2]), expected);
    })
    it('Test overloading', () => {
        let expected = true;
        assert.equal(isSymmetric([1, 1, 1]), expected);
    })
});