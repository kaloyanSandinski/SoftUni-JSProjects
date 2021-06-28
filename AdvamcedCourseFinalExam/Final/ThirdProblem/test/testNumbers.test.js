let testNumbers = require('../testNumbers.js');
let { assert, expect, should } = require('chai');


describe('Testing functionality of object testNumbers', () => {
    it('Checking sumNumbersFunction: Parameters are numbers', () => {
        expect(testNumbers.sumNumbers('pesjo', 'misho')).to.equal(undefined);
    })
    it('Checking sumNumbersFunction: Numbers can be positive and negative', () => {
        expect(testNumbers.sumNumbers(1, -4)).to.equal('-3.00');
    })
    it('Checking sumNumbersFunction: If parameters arent number, function return undefined', () => {
        expect(testNumbers.sumNumbers(true, 'pesho')).to.equal(undefined);
    })


    it('Checking numberCheckerFunction: The function parses the input to number, and validates it', () => {
        let expected = 'The input is not a number!';
        let result = '';
        try {
            testNumbers.numberChecker('pepi');
        } catch (error) {
            result = error.message;
        }

        assert.equal(result, expected);
    })
    it('Checking numberCheckerFunction: If number is even it returns message', () => {
        expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
    })
    it('Checking numberCheckerFunction: If number is odd it returns message', () => {
        expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
    })

    it('Checking averageSumArrayFunction: The function iterates through each element in the array, calculates the sum, and returns the average sum', () => {
        let inputArr = [1, 2, 3];
        expect(testNumbers.averageSumArray(inputArr)).to.equal(2);
    })
})