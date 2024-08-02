const assert = require('assert'); // node
const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should();

describe('Exemple de test', () => {

    let data = [];
    let obj = {};

    beforeEach('init', () => {
        data = [1, 2, 3, 4, 5];
        obj = { firstname: 'John', lastname: 'Doe' };
    });

    it('pending test');

    it('2x3 === 6', () => {
        assert.strictEqual(2*3, 6);
    });

    it('2x3 !== "6"', () => {
        assert.notStrictEqual(2*3, "6");
    });

    it('data contain 1', () => {
        expect(data).contain(1);
    });

    it('data not contain 10', () => {
        expect(data).not.contain(10);
    });

    it('obj have firstname == John', () => {
        obj.should.have.property('firstname').and.is.equal('John');
    });
})