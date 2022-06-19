const { assert } = require('chai')
const { companyAdministration } = require('./companyAdministration')

describe('test hiringEmployee (name, position, yearsExperience)', () => {
    it('will THROW - tell the guy to fuck off if not programmer', () => {
        let expected = `We are not looking for workers for this position.`
        assert.throws(() => companyAdministration.hiringEmployee('AA', 'gyz', 100), Error, expected)
    })
    it('will RETURN - tell the guy to fuck off if not experienced', () => {
        let expected = `AA is not approved for this position.`
        assert.equal(companyAdministration.hiringEmployee('AA', 'Programmer', 2.9999), expected)
    })
    it('will RETURN - tell the guy they are hired', () => {
        let expected = `AA was successfully hired for the position Programmer.`
        assert.equal(companyAdministration.hiringEmployee('AA', 'Programmer', 3), expected)
    })
});

describe('test calculateSalary (hours)', () => {
    it('throws an error if the hours are not a number', () => {
        assert.throws(() => companyAdministration.calculateSalary('2'), Error, "Invalid hours")
        assert.throws(() => companyAdministration.calculateSalary([2]), Error, "Invalid hours")
        assert.throws(() => companyAdministration.calculateSalary(), Error, "Invalid hours")
    })
    it('throws an error if the hours are a negative number', () => {
        assert.throws(() => companyAdministration.calculateSalary(-1), Error, "Invalid hours")
    })
    it('calculates hours * 15 BGN for regular worker', () => {
        assert.equal(companyAdministration.calculateSalary(10), 150)
        assert.equal(companyAdministration.calculateSalary(160), 2400)
    })
    it('calculates hours * 15 BGN + 1000 for overtime worker', () => {
        assert.equal(companyAdministration.calculateSalary(161), 3415)
    })
});

describe('test firedEmployee (employees, index)', () => {
    it('throws error if first param is not array', () => {
        assert.throws(() => companyAdministration.firedEmployee(1, 1), Error, "Invalid input")
        assert.throws(() => companyAdministration.firedEmployee({ 1: 1 }, 1), Error, "Invalid input")
    })
    it('throws error if second param is not int', () => {
        assert.throws(() => companyAdministration.firedEmployee([], 1.1), Error, "Invalid input")
        assert.throws(() => companyAdministration.firedEmployee([], '1'), Error, "Invalid input")
        assert.throws(() => companyAdministration.firedEmployee([]), Error, "Invalid input")
        assert.throws(() => companyAdministration.firedEmployee([], []), Error, "Invalid input")
    })
    it('throws error if array is empty - index is out of range', () => {
        assert.throws(() => companyAdministration.firedEmployee([], 0), Error, "Invalid input")
    })
    it('throws error if array not empty and index is out of range', () => {
        assert.throws(() => companyAdministration.firedEmployee(['AA', 'BB'], 2), Error, "Invalid input")
        assert.throws(() => companyAdministration.firedEmployee(['AA', 'BB'], -1), Error, "Invalid input")
    })
    it('returns correct str if array not empty and index is ok', () => {
        assert.equal(companyAdministration.firedEmployee(['AA', 'BB'], 1), "AA")
        assert.equal(companyAdministration.firedEmployee(['AA', 'BB', 'CC'], 0), "BB, CC")
    })
})