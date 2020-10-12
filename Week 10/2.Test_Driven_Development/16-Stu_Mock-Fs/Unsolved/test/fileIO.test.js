const FileIO = require("../fileIO");
const fs = require("fs");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const file = new FileIO();
      const fileName = "message.txt";

      fs.readFileSync.mockReturnValue("Hello World!")
      const input = file.read(file);

      expect(input).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const file = new FileIO();
      const fileName = "message.txt";
      const input = "Hello World!";
    
      file.write(fileName, input);

      expect(fs.writeFileSync).lastCalledWith(fileName, input);
    });
  });

  describe("append", () => {
    it("should call fs.appendFileSync with the passed in 'path' and 'data' arguments", () => {
      const file = new FileIO();
      const fileName = "message.txt";
      const input = "Hello World!";
    
      file.append(fileName, input);

      expect(fs.appendFileSync).lastCalledWith(fileName, input);
    });
  });
});
