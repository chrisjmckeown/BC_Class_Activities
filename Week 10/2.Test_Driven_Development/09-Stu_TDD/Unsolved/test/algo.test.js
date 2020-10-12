const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should return a new reversed version of the string", () => {
      const str = "Hello";
      const reversed = "olleH";
      const result = new Algo().reverse(str);
      expect(result).toEqual(reversed);
    });
  });

  describe("isPalindrome", () => {
    it("should return the `true` as the provided string is a palindrome", () => {
      const palindrome = "racecar"
      const result = new Algo().isPalindrome(palindrome);
      expect(result).toEqual(true);
    });

    it("should return the `false` as the provided string is not a palindrome", () => {
      const palindrome = "test"
      const result = new Algo().isPalindrome(palindrome);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should return a new string with the first letter of each word capitalized", () => {
      const str = "hello world";
      const capitalize = "Hello World";
      const result = new Algo().capitalize(capitalize);
      expect(result).toEqual(capitalize);
    });
  });
});
