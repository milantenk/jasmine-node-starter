const adder = require('../src/adder');

describe("adder", () => {
    it("should add the values", () => {
        // ARRANGE & ACT & ASSERT
        expect(adder(1, 2)).toEqual(3);
    });
});