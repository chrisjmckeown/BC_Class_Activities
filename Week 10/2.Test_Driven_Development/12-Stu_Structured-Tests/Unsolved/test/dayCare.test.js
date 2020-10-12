const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
    describe("Initialization", () => {
        it("should create an object with a 'children' property set to an empty array when called with the 'new' keyword", () => {
            // Arrange
            const dayCare = new DayCare();

            // Assert
            expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
        });
    });
    describe("addChild", () => {
        it("", () => {

        });
    });
    describe("pickupChild", () => {
        it("", () => {

        });
    });
});