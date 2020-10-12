const Child = require("../child");

describe("Child", () => {
    describe("Initialization", () => {
        // Positive test
        it("should create an object with when called with the 'new' keyword", () => {
            // Arrange
            const name = "Andrew";
            const age = "4";
            // Act
            const child = new Child(name, age);

            // Assert
            expect(child.name).toEqual(name);
            expect(child.age).toEqual(age);
        });

        // Exception test
        it("should throw an error if name is not a string", () => {
            const name = 6;
            const age = "5";
            const cb = () => new Child(name, age);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if name is empty", () => {
            const name = "";
            const age = "5";
            const cb = () => new Child(name, age);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if age is not a number", () => {
            const name = "Andrew";
            const age = "the";
            const cb = () => new Child(name, age);
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if age is less than 0", () => {            // Arrange
            const name = "Andrew";
            const age = "-1";
            const cb = () => new Child(name, age);
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            expect(cb).toThrowError(err);
        });
    });
});
