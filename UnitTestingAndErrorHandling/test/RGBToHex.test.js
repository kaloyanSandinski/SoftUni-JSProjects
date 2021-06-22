let rgbToHexColor = require('../RGBToHex');
let { assert, expect, should } = require('chai');

//Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
//Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//Return undefined if any of the input parameters are of invalid type or not in the expected range

describe('Testing RGBToHex problem functionality', () => {
    it('Return the same color in hexadecimal format as a string', () => {
        let expected = '#010203';
        expect(rgbToHexColor(1, 2, 3)).to.equal(expected);;
    });
    it('Return undefined if any of the parameters is negative', () => {
        let expected = undefined;
        assert.equal(rgbToHexColor(-1, 2, 3), expected);
    });
    it('Return undefined if any of the parameters value is over 255', () => {
        let expected = undefined;
        assert.equal(rgbToHexColor(1, 2, 270), expected);
    });
    it('Return undefined if any of the input parameters are of invalid type', () => {
        let expected = undefined;
        assert.equal(rgbToHexColor('helloIamTheError', 2, 3), expected);
    });
    it('Converts red to hex', () => {
        let expected = '#FF0000';
        assert.equal(rgbToHexColor(255, 0, 0), expected);
    })
    it('Converts blue to hex', () => {
        let expected = '#0000FF';
        assert.equal(rgbToHexColor(0, 0, 255), expected);
    })
    it('Converts green to hex', () => {
        let expected = '#00FF00';
        assert.equal(rgbToHexColor(0, 255, 0), expected);
    })
});