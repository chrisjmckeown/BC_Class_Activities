const Letter = require("./letter");
const Word = require("./letter");

class Word  {
    constructor(word) {
        this.letters = word.split("").map(char => new Letter(char));
    }
    isGuessed()
    displayWord() {
        let result;
        for (letter in letters) {
result += letter
        }
    }
}

module.exports = Word;