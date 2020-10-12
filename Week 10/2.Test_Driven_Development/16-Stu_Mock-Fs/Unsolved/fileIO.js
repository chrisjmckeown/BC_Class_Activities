const fs = require("fs");

function FileIO() {}

FileIO.prototype.read = function(file) {
  return fs.readFileSync(file, "utf8");
};

FileIO.prototype.write = function(path, data) {
  return fs.writeFileSync(path, data);
};

FileIO.prototype.append = function(path, data) {
  return fs.appendFileSync(path, data);
};

module.exports = FileIO;

