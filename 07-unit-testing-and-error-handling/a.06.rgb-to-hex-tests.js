const { expect, assert } = require('chai')
const { rgbToHexColor } = require('./a.06.rgb-to-hex')

describe('holy crap!!!', () => {
    it('returns black if rgb 0, 0, 0', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });

    it('returns white if rgb 255, 255, 255', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')
    });

    it('returns royal blue if rgb 65, 105, 225', () => {
        assert.equal(rgbToHexColor(65, 105, 225), '#4169E1')
    });

    // Return undefined if any of the input parameters are of an invalid type or not in the expected range
    it('returns undefined if less args', () => {
        assert.isUndefined(rgbToHexColor(65, 105))
    });

    it('returns undefined if no args', () => {
        assert.isUndefined(rgbToHexColor())
    });

    it('returns undefined if one arg is not integer', () => {
        assert.isUndefined(rgbToHexColor(255, '255', 255))
    });

    it('returns undefined if first arg is below 0', () => {
        assert.isUndefined(rgbToHexColor(-1, 255, 255))
    });

    it('returns undefined if second arg is below 0', () => {
        assert.isUndefined(rgbToHexColor(255, -1, 255))
    });

    it('returns undefined if third arg is below 0', () => {
        assert.isUndefined(rgbToHexColor(255, 255, -1))
    });

    it('returns undefined if first arg is above 255', () => {
        assert.isUndefined(rgbToHexColor(256, 255, 255))
    });

    it('returns undefined if second arg is above 255', () => {
        assert.isUndefined(rgbToHexColor(255, 256, 255))
    });

    it('returns undefined if third arg is above 255', () => {
        assert.isUndefined(rgbToHexColor(255, 255, 256))
    });
})